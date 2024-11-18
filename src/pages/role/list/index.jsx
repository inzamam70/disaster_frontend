

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

export const Roles = () => {
    const [roles, setRoles] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(5); // Default items per page
    const [searchTerm, setSearchTerm] = React.useState("");

    React.useEffect(() => {
        const callApi = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/roles");
                if (response?.data?.success) {
                    setRoles(response?.data?.data);
                } else {
                    console.error("API request was successful but returned unexpected data");
                }
            } catch (error) {
                console.error("Failed to fetch roless:", error);
            }
        };
        callApi();
    }, []);

    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:8000/api/roles/${id}`);
        const response = await axios.get("http://localhost:8000/api/roles");
        if (response?.data?.success) {
            setRoles(response?.data?.data);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredRoles = roles.filter(role =>
        (role.name?.toLowerCase().includes(searchTerm.toLowerCase()) || '') 
    );
    

    const currentItems = filteredRoles.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page whenever items per page changes
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page whenever search term changes
    };

    return (
        <div className="home-container">
            <div className="home-container-header">
                <h4>Roles</h4>
                <Link className="link" to="/be/roleCreate">Add Role</Link>
            </div>

            <div className="pagination-controls">
                <div>
                    <label htmlFor="search">Search: </label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div>
                    <label htmlFor="itemsPerPage">Items per page: </label>
                    <input
                        type="number"
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        min="1"
                        max={roles.length}
                    />
                </div>
            </div>

            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>SlNo</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {currentItems.length > 0 ? (
                        currentItems.map((role, index) => (
                            <tr key={role.id}>
                                <td>{ index = index + 1}</td>
                                <td>{role.name}</td>
                                <td className="action-btn">
                                    <Link className="link" style={{ backgroundColor: 'blue', borderRadius: '50%', width: 50, height: 45, boxShadow: 'grey' }} to={`/be/roleEdit/${role.id}`}><FaEdit /></Link>
                                    <Link className="link" style={{ backgroundColor: 'green', borderRadius: '50%', width: 50, height: 45 }} to={`/be/roleView/${role.id}`}><AiOutlineEye /></Link>
                                    <button className="link" style={{ backgroundColor: 'red', borderRadius: '50%', width: 50, height: 45 }} type="button" onClick={() => deleteHandler(role.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No Role items available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="pagination">
                {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
