import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const SliderView = () =>{

    const { id } = useParams();
    const [slider, setSlider] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/sliders/${id}`);
            if (response?.data?.success) {
                setSlider(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>Slider</h4>
                </div>   
                
                <div className="slider-card">
                    <div className="slidercard-image">
                        <img src={`http://localhost:8000/${slider.image}`} alt="slider" />
                    </div>
                    
                    <div className="slidercard-content">
                        <h3>Title : {slider.title}</h3>
                        <h3>Short Title : {slider.short_title}</h3>
                        <p>Description : {slider.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}