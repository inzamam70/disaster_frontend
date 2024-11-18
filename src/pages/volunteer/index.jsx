import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { Preloader } from "../../components/preloader";
import { Nav } from "../../components/nav";
import image from "../../assets/image/bg.png";
import image2 from "../../assets/image/man.png";
import { FooterUi } from "../../components/footerui";
import { act } from "react";
import axios from "axios";

export const Volunteer = () =>{
    const [loading, setLoading] = React.useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [profession, setProfession] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfirmPassword] = useState("");
    const [active_role_id, setActiveRole] = useState(3);
    const navigate = useNavigate();

    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }
    const emailChangeHandeler = (e) => {
        setEmail(e.target.value);
    }
    const phoneChangehandeler = (e) => {
        setPhone(e.target.value);
    }
    const addressChangeHandeler = (e) => {
        setAddress(e.target.value);
    }
    const professionChangeHandeler = (e) => {
        setProfession(e.target.value);
    }
    const passwordChangeHandeler = (e) => {
        setPassword(e.target.value);
    }
    const confirmPasswordChangeHandeler = (e) => {
        setConfirmPassword(e.target.value);
    }
    const activeRoleChangeHandeler = (e) => {
        setActiveRole(e.target.value);
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
            phone: phone,
            address: address,
            profession: profession,
            password: password,
            password_confirmation: password_confirmation,
            active_role_id: 3,
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

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);


    return(
        <>
        {loading ? <Preloader /> : null}
            <Nav />
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Volunteer Register</li>
                </ul>
            </div>
            <div className="activity-content">
                    <h1>Volunteer</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </p>
                </div>
            <div className="animation-header">
                    <div className="animation-header-container">
                        <h2>
                        স্বেচ্ছাসেবকগণ আপনারা  এখানে নিবন্ধন করুন.."যদি আগে থেকে নিবন্ধন করা থাকে, তাহলে লগইন অপশনে গিয়ে আপনার তথ্য দিয়ে লগইন করুন।"   <span>আমার গর্ব আমার দেশ , চলো গড়ি বাংলাদেশ । </span>  এ বিষয়ে প্রতিযোগীরা প্রতিযোগিতা করুক।’ (সুরা : মুতাফফিফিন, আয়াত : ২৬)
                        </h2>
                    </div>
                </div>
            <div className="volunteer">
                <div className="volunteer-container">
                    <div className="volunteer-img">
                        <img src={image2} alt="image" />
                    </div>
                    <div className="volunteer-content">
                        <h2>Volunteer Registration</h2>
                        <form  onSubmit={submitHandeler}>
                            <div className="volunteer-form">
                                <div className="volunteer-form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={nameChangeHandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter Your Email" value={email} onChange={emailChangeHandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" id="phone" placeholder="Enter Your Phone" value={phone} onChange={phoneChangehandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" placeholder="Enter Your Address" value={address} onChange={addressChangeHandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="profession">Profession</label>
                                    <input type="text" id="city" placeholder="Enter Your profession" value={profession} onChange={professionChangeHandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Enter Your Password" value={password} onChange={passwordChangeHandeler}/>
                                </div>
                                <div className="volunteer-form-group">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input type="password" id="confirm-password" placeholder="Confirm Your Password" value={password_confirmation} onChange={confirmPasswordChangeHandeler}/>
                                </div>
                                <input type="hidden"  value={active_role_id} onChange={activeRoleChangeHandeler}/>
                                <div className="volunteer-form-group">
                                    <button >Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FooterUi />
        </>
    );
};