

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const About = () => {
    const [about, setAbouts] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(5); // Default items per page
    const [searchTerm, setSearchTerm] = React.useState("");


    function notify() {
        toast.success('About deleted Successfully', {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#FF0000', 
                color: '#ffffff', // White text
                borderRadius: '5px',
                padding: '10px',
            },
        });
    }

    React.useEffect(() => {
        const callApi = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/abouts");
                if (response?.data?.success) {
                    setAbouts(response?.data?.data);
                } else {
                    console.error("API request was successful but returned unexpected data");
                }
            } catch (error) {
                console.error("Failed to fetch abouts:", error);
            }
        };
        callApi();
    }, []);



    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                // Item delete korar jonno API call
                await axios.delete(`http://localhost:8000/api/abouts/${id}`);
    
                // Delete operation success hole data update kora
                const response = await axios.get("http://localhost:8000/api/abouts");
                if (response?.data?.success) {
                    setAbouts(response?.data?.data);
    
                    // Notify success
                    notify();
                }
            } catch (error) {
                console.error("Error deleting the item:", error);
    
                // Optionally, error notification o dekhate paren
                toast.error('Error deleting the item', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredAbouts = about.filter(about =>
       (about.name ? about.name.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
         (about.designation ? about.designation.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
            (about.description ? about.description.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
            (about.image ? about.image.toLowerCase().includes(searchTerm.toLowerCase()) : '')||
            (about.facebook ? about.facebook.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
            (about.twitter ? about.twitter.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
            (about.linkedin ? about.linkedin.toLowerCase().includes(searchTerm.toLowerCase()) : '') ||
            (about.instagram ? about.instagram.toLowerCase().includes(searchTerm.toLowerCase()) : '')

    );

    const currentItems = filteredAbouts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredAbouts.length / itemsPerPage);

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
            <ToastContainer />
            <div className="home-container-header">
                <h4>About Team</h4>
                <Link className="link" to="/be/aboutCreate">Add  About Team</Link>
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
                        max={about.length}
                    />
                </div>
            </div>

            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>SlNo</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {currentItems.length > 0 ? (
                        currentItems.map((about, index) => (
                            <tr key={about.id}>
                                <td>{indexOfFirstItem + index + 1}</td> {/* Correct serial number */}
                                <td>{about.name}</td>
                                <td>{about.designation}</td>
                                <td>{about.description}</td>

                                <td>
                                    <img src={`http://localhost:8000/${about.image}`} alt="slider" style={{ width: 100, height: 100 }} />
                                </td>
                                <td className="action-btn">
                                    <Link className="link" style={{ backgroundColor: 'blue', borderRadius: '50%', width: 50, height: 45, boxShadow: 'grey' }} to={`/be/aboutEdit/${about.id}`}><FaEdit /></Link>
                                    <Link className="link" style={{ backgroundColor: 'green', borderRadius: '50%', width: 50, height: 45 }} to={`/be/aboutView/${about.id}`}><AiOutlineEye /></Link>
                                    <button className="link" style={{ backgroundColor: 'red', borderRadius: '50%', width: 50, height: 45 }} type="button" onClick={() => deleteHandler(about.id)  }><FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No About available</td>
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
