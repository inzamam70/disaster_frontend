import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const AboutView = () =>{

    const { id } = useParams();
    const [about, setabout] = React.useState({});

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/abouts/${id}`);
            if (response?.data?.success) {
                setabout(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>About Team Card</h4>
                </div>   
                
                <div className="slider-card">
                    <div className="slidercard-image">
                        <img src={`http://localhost:8000/${about.image}`} alt="landingcard" />
                    </div>
                    
                    <div className="slidercard-content">
                        <h3>Name : {about.name}</h3>
                        <p>Designation : {about.designation}</p>
                        <p>Description : {about.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}