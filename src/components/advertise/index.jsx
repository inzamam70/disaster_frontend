import React from "react";
import "./index.css";
import image from "../../assets/image/img1.png";

export const AdModal = ({ onClose }) => {
    return (
        <div className="ad-modal-overlay">
            <div className="ad-modal-content">
                <div className="ad-modal-content-text">
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <h2>Special Offer!</h2>
                    <p>Don’t miss out on this exclusive deal.</p>
                    <p>Get <span>50%</span> off your first order.</p>
                    <img src={image} alt="" />
                    <button className="ad-modal-button">See Offer</button>
                </div>

                <div className="bottle-body">
                    <div className="bottle">
                        <div className="sides">
                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>

                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>

                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>

                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>

                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>

                            <div className="side">
                                <span>D</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>K</span>
                                <span> </span>
                                <span>M</span>
                                <span>O</span>
                                <span>R</span>
                                <span>E</span>
                                <span> </span>
                                <span>W</span>
                                <span>A</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                                <span>!</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};