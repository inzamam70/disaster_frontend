import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export const RoleNavCreate = () => {
    const [roles, setRoles] = useState([]);
    const [navItems, setNavItems] = useState([]); // To store available nav items
    const [selectedRole, setSelectedRole] = useState("");
    const [selectedNavItems, setSelectedNavItems] = useState([]); // To store selected nav items
    const navigate = useNavigate();

    // Fetch roles dynamically
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/roles");
                setRoles(response?.data?.data || []); // Ensure it's an array
            } catch (error) {
                console.error("Error fetching roles:", error);
            }
        };

        fetchRoles();
    }, []);

    // Fetch nav items dynamically (adjust according to your API)
    useEffect(() => {
        const fetchNavItems = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/navs");
                setNavItems(response?.data?.data || []); // Ensure it's an array
            } catch (error) {
                console.error("Error fetching nav items:", error);
            }
        };

        fetchNavItems();
    }, []);

    // Handle checkbox change for nav items
    const handleCheckboxChange = (e) => {
        const value = Number(e.target.value); // Convert to a number
        setSelectedNavItems((prevSelectedNavItems) => {
            if (prevSelectedNavItems.includes(value)) {
                // Remove the item if already selected (uncheck the checkbox)
                return prevSelectedNavItems.filter((item) => item !== value);
            } else {
                // Add the item to the selectedNavItems array
                return [...prevSelectedNavItems, value];
            }
        });
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure a role and at least one nav item is selected
        if (!selectedRole) {
            alert("Please select a role");
            return;
        }

        if (selectedNavItems.length === 0) {
            alert("Please select at least one navigation item");
            return;
        }

        // Structure the data to send
        const data = {
            roleId: selectedRole, // This is the selected role
            navItemIds: selectedNavItems, // These are the selected nav items
        };

        try {
            // Make a POST request to submit the form data to the server
            const response = await axios.post("http://localhost:8000/api/role-navitems", data);
            console.log("Data submitted successfully:", response.data);

            // Navigate back or to a success page after submission
            navigate("/be/roles");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <>
            <div className="home-container">
                <div className="home-container-header">
                    <h4>Create Role Nav Item</h4>
                    <Link className="link" to="/be/roles">
                        Back
                    </Link>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <p>Role Nav Item Form</p>

                    {/* Role selection */}
                    <div className="form-group">
                        <h2>Select Role</h2>
                        <select
                            id="role"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            <option value="">-- Select a Role --</option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Nav items checkboxes */}
                    <div className="form-group">
                        <h2>Select Nav Items</h2>
                        {navItems.map((item) => (
                            <div key={item.id}>
                                <input
                                    type="checkbox"
                                    id={`nav-item-${item.id}`}
                                    value={item.id} 
                                    checked={selectedNavItems.includes(Number(item.id))} 
                                    onChange={handleCheckboxChange}
                                />

                                <label htmlFor={`nav-item-${item.id}`}>{item.name}</label>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="form-group">
                        <button type="button" onClick={() => navigate(-1)}>
                            Cancel
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};
