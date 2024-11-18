import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const NavView = () =>{

    const { id } = useParams();
    const [nav, setNav] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/navs/${id}`);
            if (response?.data?.success) {
                setNav(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>Nav</h4>
                </div>   
                
                <div className="slider-card">
                    
                    <div className="slidercard-content">
                        <h3>Title : {nav.name}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}