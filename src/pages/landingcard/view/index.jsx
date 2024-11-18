import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const LandingCardView = () =>{

    const { id } = useParams();
    const [landingcard, setlandingcard] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/landingcards/${id}`);
            if (response?.data?.success) {
                setlandingcard(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>Landing Card</h4>
                </div>   
                
                <div className="slider-card">
                    <div className="slidercard-image">
                        <img src={`http://localhost:8000/${landingcard.image}`} alt="landingcard" />
                    </div>
                    
                    <div className="slidercard-content">
                        <h3>Title : {landingcard.title}</h3>
                        <p>Description : {landingcard.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}