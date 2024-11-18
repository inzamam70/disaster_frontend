import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const GalleryView = () =>{

    const { id } = useParams();
    const [gallery, setGallery] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/gallerys/${id}`);
            if (response?.data?.success) {
                setGallery(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>Gallery Image</h4>
                </div>   
                
                <div className="slider-card">
                    <div className="slidercard-image">
                        <img src={`http://localhost:8000/${gallery.image}`} alt="slider" />
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}