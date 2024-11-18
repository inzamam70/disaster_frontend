

import React, { useState, useEffect } from "react";
import "./index.css";
import image from "../../assets/image/bg.png";
import { Preloader } from "../../components/preloader";
import { Nav } from "../../components/nav";
import { FooterUi } from "../../components/footerui";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"; // Correctly import jwtDecode


import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export const Register = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }
    const emailChangeHandeler = (e) => {
        setEmail(e.target.value);
    }
    const passwordChangeHandeler = (e) => {
        setPassword(e.target.value);
    }
    const confirmPasswordChangeHandeler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const submitHandeler = (e) => {
        e.preventDefault();
        
        if (password !== password_confirmation) {
            alert("Passwords do not match. Please check your input.");
            return; // Stop further submission
        } 
    
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        };
    
        axios.post("http://localhost:8000/api/register", data)
            .then((res) => {
                console.log(res.data);
                
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    

  



  

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);



    return (
        <>
            {loading ? <Preloader /> : null}
            <Nav />
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Register</li>
                </ul>
            </div>
            <div className="login">
                <h1 style={{ marginTop: "30px" }}>Register</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>

                <div className="background">
                    
                </div>
                <form className="form-body" onSubmit={submitHandeler}>
                    <div className="form-content">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Name" value={name} onChange={nameChangeHandeler} id="username" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" value={email} onChange={emailChangeHandeler}  id="username" />
                    </div>
                    <div className="form-content">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password"  value={password} onChange={passwordChangeHandeler} id="password" />
                    </div>

                    <div className="form-content">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder="Password" 
                        value={password_confirmation} onChange={confirmPasswordChangeHandeler}
                         id="password" />
                    </div>

                    
                    <button className="form-btn">Register</button>
                   
                        
                    
                </form>


            </div>
            <FooterUi />
        </>
    );
};
