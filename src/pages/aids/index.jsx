

import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Nav } from "../../components/nav";
import image from "../../assets/image/bg.png";
import { Preloader } from "../../components/preloader";
import { FooterUi } from "../../components/footerui";
import imgicon from "../../assets/image/man.png";
import axios from "axios";

export const Aids = () => {
    const [loading, setLoading] = React.useState(true);
    const [aids, setAids] = React.useState([]);
    const [showAll, setShowAll] = React.useState(false); // State to manage the view

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get("http://localhost:8000/api/aids");
            if (response?.data?.success) {
                setAids(response?.data?.data);
            }
        };
        callApi();
    }, []);

    // Simulating loading time with setTimeout
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    const getStatusBackgroundColor = (status) => {
        switch (status) {
            case 'pending':
                return 'blue';  // Blue for pending
            case 'accepted':
                return 'green'; // Green for accepted
            case 'denied':
                return 'red';   // Red for denied
            default:
                return 'white'; // Default color
        }
    };

    const handleSeeMore = () => {
        setShowAll(!showAll); // Toggle the showAll state
    };

    return (
        <>
            {loading ? <Preloader /> : null}
            <Nav />
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Aids</li>
                </ul>
            </div>

            <div className="aid">
                <div className="aid-content">
                    <h1>Aids</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </p>
                </div>

                <div className="aid-container">
                    {(showAll ? aids : aids.slice(0, 5)).map((aid, index) => (
                        <div className="aid-card" key={index}>
                            <div className="aid-card-header">
                                <img src={`http://localhost:8000/${aid.landingcard?.image}`} alt="rover" />
                            </div>
                            <div className="aid-card-body">
                                <span className="tag" style={{ backgroundColor: getStatusBackgroundColor(aid.status) }}>{aid.status}</span>
                                <h4>{aid.landingcard?.title || 'N/A'}</h4>
                                <p className="tag-pink">{aid.landingcard?.affected_type || 'N/A'}</p>
                                <p>Aids: {aid.aid}</p>
                                <p>Person Qty: {aid.qty}</p>
                                <div className="aid-user">
                                    <img src={imgicon} alt="user" />
                                    <div className="aid-user-info">
                                        <h5>{aid.name}</h5>
                                        <small>{aid.phone}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <button onClick={handleSeeMore} className="see-more-btn">
                    {showAll ? "See Less--" : "See More--" }
                </button>
            </div>

            <FooterUi />
        </>
    );
};
