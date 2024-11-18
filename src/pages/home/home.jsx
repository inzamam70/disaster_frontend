import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./home.css";
//edit icons
import { FaEdit, FaTrash } from "react-icons/fa";
//eye icon
import { AiOutlineEye } from "react-icons/ai";
import { act } from "react";
//checkmark icon
import { FaCheck } from "react-icons/fa";
//cross icon
import { FaTimes } from "react-icons/fa";

import image from "../../assets/image/human.png";
import image2 from "../../assets/image/vest.png";
import image3 from "../../assets/image/disaster (1).png";
import image4 from "../../assets/image/peace.png";
import image5 from "../../assets/image/partners.png";
import image6 from "../../assets/image/products.png";
import { Footer } from "../../components/footer";
import { IoMdLogOut } from "react-icons/io";



const Home = () => {


    const [users, setUsers] = useState({ totalUser: 0, totalVolunteer: 0 });
    const [contacts, setContacts] = useState([]);
    const [aids, setAids] = useState([]);
    const [landingcards, setLandingcards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/users");
                if (response.data.success) {
                    setUsers({
                        totalUser: response.data.totalUser,
                        totalVolunteer: response.data.totalVolunteer
                    });
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchContacts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/contacts");
                if (response.data.success) {
                    setContacts(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        const fetchAids = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/aids");
                if (response.data.success) {
                    setAids(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching aids:', error);
            }
        };

        const fetchLandingcards = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/landingcards");
                if (response.data.success) {
                    setLandingcards(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching landingcards:', error);
            }
        };


        fetchUsers();
        fetchContacts();
        fetchAids();
        fetchLandingcards();
    }, []);








    const submitHandler = async (e, status, id) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('status', status);

        try {
            const response = await axios.post(`http://localhost:8000/api/aids/status/${id}`, formData);
            if (response?.data?.success) {
                // Update the aids state directly
                setAids((prevAids) =>
                    prevAids.map((aid) =>
                        aid.id === id ? { ...aid, status } : aid
                    )
                );
                alert(`The request was ${status}.`);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };


    const totalAidsCount = aids.length;
    const totalLandingsCount = landingcards.length;

    const handleSeeMore = () => {
        setShowAll(!showAll); // Toggle the showAll state
    };



    return (
        <>
            <div className="dashboard-container-header">
                <h4>Disaster Assistant</h4>
                <button><IoMdLogOut /></button>
            </div>
            <div className="home-container">

                <h1>Dashboards</h1>

                <div className="dasboard-card-container">
                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">{users.totalUser}</h3>
                                <span className="total-orders-label">Users</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image5} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">{users.totalVolunteer}</h3>
                                <span className="total-orders-label">Volunteers</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image2} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">{totalLandingsCount}</h3>
                                <span className="total-orders-label">Affected Areas</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image3} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">{totalAidsCount}</h3>
                                <span className="total-orders-label">Ask For Aid</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image4} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">0</h3>
                                <span className="total-orders-label">Training Center</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-media">
                            <div className="card-media-body">
                                <h3 className="total-orders" id="totalOrders">0</h3>
                                <span className="total-orders-label">Products</span>
                            </div>
                            <div className="card-image-container">
                                <img src={image6} alt="Total Bills"
                                    className="icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gateintouch">
                    <h2>Massages</h2>
                    <table className="gateintouch-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.message}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                <div className="aid-manage">

                    <h1> Manage Aids</h1>
                    <table className="gateintouch-table">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Affected Type</th>
                                <th>Aids</th>
                                <th>Person Qty</th>
                                <th>Contact Person</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(showAll ? aids : aids.slice(0, 4)).map((aid) => (
                                <tr key={aid.id}>
                                    <td>{aid.landingcard?.title || 'N/A'}</td>
                                    <td>{aid.landingcard?.affected_type || 'N/A'}</td>
                                    <td>{aid.aid}</td>
                                    <td>{aid.qty}</td>
                                    <td>{aid.name}</td>
                                    <td>{aid.phone}</td>
                                    <td>
                                        <span style={{
                                            backgroundColor: aid.status === 'pending' ? 'blue' : aid.status === 'accepted' ? 'green' : 'red',
                                            padding: '6px',
                                            color: 'white',
                                            marginTop: '15px'
                                        }}>{aid.status}</span>
                                    </td>


                                    <td className="aid-action-btn">
                                        {aid.status === 'accepted' ? (
                                            // Only show the deny button if the status is accepted
                                            <button onClick={(e) => submitHandler(e, 'denied', aid.id)} style={{ color: 'red' }}>
                                                <FaTimes />
                                            </button>
                                        ) : (
                                            <>
                                                <button onClick={(e) => submitHandler(e, 'accepted', aid.id)}>
                                                    <FaCheck />
                                                </button>
                                                <button onClick={(e) => submitHandler(e, 'denied', aid.id)}>
                                                    <FaTimes />
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <button onClick={handleSeeMore} className="see-more-btn" >
                        {showAll ? "See Less--" : "See More--"}
                    </button>

                </div>

            </div>
        </>



    );
};

export default Home;
