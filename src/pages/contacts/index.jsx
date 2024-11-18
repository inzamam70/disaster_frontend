import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Nav } from "../../components/nav";
import image from "../../assets/image/bg.png";
import { Preloader } from "../../components/preloader";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterUi } from "../../components/footerui";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Contact = () => {
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [message,setMessage] = React.useState("");

    const nameChangeHandeler = (e) =>{
        setName(e.target.value);
    }
    const emailChangeHandeler = (e) =>{
        setEmail(e.target.value);
    }
    const phoneChangeHandeler = (e) =>{
        setPhone(e.target.value);
    }
   
    const massageChangehandeler = (e) =>{
        setMessage(e.target.value);
    }

    const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('message',message);

        await axios.post('http://localhost:8000/api/contacts',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/")
            }
        })
     }

    // Simulating loading time with setTimeout
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? <Preloader /> : null}
            <Nav />
            <div className="breadcrums" >
                <img src={image} alt="image" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Contact</li>
                </ul>
            </div>


            <div className="contact">
                <div className="contact-left">
                    <h2>Gate In Touch</h2>
                    <form action="" className="contact-form" onSubmit={submitHandeler}>
                        <div className="contact-form-element">
                            <label htmlFor="" className="contact-form-element-lebel">Name</label>
                            <input type="text" placeholder="Enter your name" className="contact-form-element-input" value={name} onChange={nameChangeHandeler} />
                        </div>
                        <div className="contact-form-element">
                            <label htmlFor="" className="contact-form-element-lebel">Email</label>
                            <input type="email" placeholder="Enter your email" className="contact-form-element-input" value={email} onChange={emailChangeHandeler}/>
                        </div>
                        <div className="contact-form-element">
                            <label htmlFor="" className="contact-form-element-lebel">Phone No</label>
                            <input type="number" placeholder="Enter your phone no" className="contact-form-element-input" value={phone} onChange={phoneChangeHandeler} />
                        </div>
                        <div className="contact-form-element">
                            <label htmlFor="" className="contact-form-element-lebel">What do you have in mind? </label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" className="contact-form-element-text" value={message} onChange={massageChangehandeler}></textarea>
                        </div>
                        <button className="button">Submit</button>
                        <button type="button" className="button" onClick={()=>navigate(-1)}>Cancel</button>
                    </form>

                </div>
                <div className="contact-right">
                    <h3>Reach us at</h3>
                    <div className="social">
                        <button className="button"><FaFacebookF /></button>
                        <button className="button"><FaTwitter /></button>
                        <button className="button"><FaLinkedinIn /></button>
                        <button className="button"><FaYoutube /></button>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29468.97020781703!2d89.29509377568867!3d22.59326383649945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01d42e13245d21%3A0x663812c70649e60f!2sPaikgachha%2C%20Bangladesh!5e0!3m2!1sen!2sca!4v1722179867662!5m2!1sen!2sca"
                            width="100%" height="400" style={{ border: 0 }}
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>




                </div>
                {/* <div className="check">
                    <h1 style={{ padding: 10 }}>Scan Here ✔</h1>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= Inzamam Islam Raj 
                    Frontend Developer  01865016322 70inzamam.sentinel@gmail.com " alt="" />
                    
                </div> */}
            </div>

            <FooterUi />
        </>
    );
}