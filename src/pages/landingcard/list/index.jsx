

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

export const LandingCard = () => {
    const [landingcards, setLandingCards] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(5); // Default items per page
    const [searchTerm, setSearchTerm] = React.useState("");

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get("http://localhost:8000/api/landingcards");
            if (response?.data?.success) {
                setLandingCards(response?.data?.data);
            }
        };
        callApi();
    }, []);

    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:8000/api/landingcards/${id}`);
        const response = await axios.get("http://localhost:8000/api/landingcards");
        if (response?.data?.success) {
            setLandingCards(response?.data?.data);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredLandingCards = landingcards.filter(landingcard =>
        landingcard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        landingcard.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentItems = filteredLandingCards.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredLandingCards.length / itemsPerPage);

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
        <>
            <div className="home-container">
                <div className="home-container-header">
                    <h4>Affected Areas</h4>
                    <Link className="link" to="/be/landingcardCreate">Add Affected Areas</Link>
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

                    <div >
                        <label htmlFor="itemsPerPage">Items per page: </label>
                        <input 
                            type="number" 
                            id="itemsPerPage" 
                            value={itemsPerPage} 
                            onChange={handleItemsPerPageChange} 
                            min="1" 
                            max={landingcards.length} 
                        />
                    </div>
                </div>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>SlNo</th>
                            <th>Location</th>
                            <th>Affected Type</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {currentItems.map((landingcard, index) => (
                            <tr key={landingcard.id}>
                                <td>{indexOfFirstItem + index + 1}</td>
                                <td>{landingcard.title}</td>
                                <td>{landingcard.affected_type}</td>
                                <td>{landingcard.description}</td>
                                <td>
                                    <img src={`http://localhost:8000/${landingcard.image}`} alt="slider" style={{ width: 100, height: 100 }} />
                                </td>
                                <td className="action-btn">
                                    <Link className="link" style={{ backgroundColor: 'blue', borderRadius: '50%', width: 50, height: 45, boxShadow: 'grey' }} to={`/be/landingcardEdit/${landingcard.id}`}><FaEdit /></Link>
                                    <Link className="link" style={{ backgroundColor: 'green', borderRadius: '50%', width: 50, height: 45 }} to={`/be/landingcardView/${landingcard.id}`}><AiOutlineEye /></Link>
                                    <button className="link" style={{ backgroundColor: 'red', borderRadius: '50%', width: 50, height: 45 }} onClick={() => deleteHandler(landingcard.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
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
        </>
    );
};
