
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Modal from "../modal";

export const LandingPage = () => {
    const [landingcards, setLandingcards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [showAll, setShowAll] = React.useState(false); // State to manage the view

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get("http://localhost:8000/api/landingcards");
            if (response?.data?.success) {
                setLandingcards(response?.data?.data);
            }
        };
        callApi();
    }, []);

    const handleClose = () => {
        setOpen(false);
        setSelectedCard(null);
    };

    const handleOpen = (card) => {
        setSelectedCard(card);
        setOpen(true);
    };

    const handleSeeMore = () => {
        setShowAll(!showAll); // Toggle the showAll state
    }

    return (
        <>
            <div className="container-header">
                <h1>Affected Areas</h1>
                <div className="container-section">
                    {(showAll ? landingcards : landingcards.slice(0,5)).map((landingcard, index) => (
                        <button type="button" key={index} onClick={() => handleOpen(landingcard)}>
                            <div className="container-card">
                                <img src={`http://localhost:8000/${landingcard.image}`} alt="img 1" className="card-image" />
                                <div className="card-text">
                                    <h3>{landingcard.title}</h3>
                                    <p>{landingcard.affected_type}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
                {selectedCard && (
                    <Modal isOpen={open} onClose={handleClose}>
                        <>
                            <h1>{selectedCard.title}</h1>
                            <h3>{selectedCard.affected_type}</h3>
                            <img src={`http://localhost:8000/${selectedCard.image}`} alt={selectedCard.title} className="modal-image" />

                        </>
                    </Modal>
                )}

                <button onClick={handleSeeMore} className="see-more-btn">
                    {showAll ? "See Less--" : "See More--"}
                </button>
            </div>
        </>
    );
};
