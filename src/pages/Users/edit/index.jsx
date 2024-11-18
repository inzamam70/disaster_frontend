import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css";

export const UserEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    // Fetch user details including the role
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/users/${id}`);
                if (response?.data?.success) {
                    const userData = response?.data?.data;
                    setName(userData?.name);
                    setSelectedRole(userData?.role_id);  // Assuming `role_id` comes in the response
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchData();
    }, [id]);

    // Fetch available roles
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/roles");
                setRoles(response?.data?.data || []);
            } catch (error) {
                console.error("Error fetching roles:", error);
            }
        };
        fetchRoles();
    }, []);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Prepare data for role assignment
        const data = {
            role_id: selectedRole  // Pass the selected role
        };

        try {
            // Call the 'assignRole' API to update the user's role
            const response = await axios.post(`http://localhost:8000/api/users/assign-role/${id}`, data);
            if (response?.data?.success) {
                alert('Role assigned successfully!');
                history('/be');  // Redirect to the users list page after a successful update
            }
        } catch (error) {
            console.error("Error assigning role:", error);
            alert("Failed to assign role. Please try again.");
        }
    };

    return (
        <div className="home-container">
            <div className="home-container-header">
                <h4>Edit User</h4>
                <Link className="link" to="/be/users">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <p>User Form</p>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Assign Role</label>
                    <select name="role" id="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => history('/be/users')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

