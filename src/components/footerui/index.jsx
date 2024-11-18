import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/image/logo.png";
import background from "../../assets/image/bg.gif";

//location icon
import { AiOutlineEnvironment } from "react-icons/ai";
//envelope icon
import { AiOutlineMail } from "react-icons/ai";
//phone icon
import { AiOutlinePhone } from "react-icons/ai";

export const FooterUi = () => {
    return (
        <>
            <div className="footer-section">
                {/* <img src={background} alt="" className="back"/> */}
                <div className="footerui">
                    <div className="fotter-content">
                        <div className="logo-a">
                            <img src={Logo} alt="logo" className="logo" />
                            <h3>Disaster Assistant</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.
                        </p>
                    </div>
                    <div className="fotter-content">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </div>
                    <div className="fotter-content">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="">FAQ</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="fotter-content">
                        <h3>Address</h3>
                        <p><AiOutlineEnvironment /> 120/A NurerChala Bazer,Badda,Dhaka</p>
                        <p><AiOutlineMail /> 70inzamam@gmail.com</p>
                        <p><AiOutlinePhone /> +880 01865016322 </p>
                    </div>
                </div>
                <div>
                      <p className="footer-txt">Technology Partner @faltuCoder</p>
                </div>
                
            </div>
        </>


    );
}