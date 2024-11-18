
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import axios from "axios";

export const RoleView = () =>{

    const { id } = useParams();
    const [role, setRole] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/roles/${id}`);
            if (response?.data?.success) {
                setRole(response?.data?.data);
            }
        };
        callApi();
    }, [id]);


    return(
        <>
            <div className="slidercontainer">
                <div className="home-container-header">
                    <h4>Role</h4>
                </div>   
                
                <div className="slider-card">
                    
                    <div className="slidercard-content">
                        <h3>Name : {role.name}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}