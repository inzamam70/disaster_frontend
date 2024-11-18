import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/image/logo.png";
//cart icon
import { AiOutlineShoppingCart } from "react-icons/ai";
//heart icon
import { AiOutlineHeart } from "react-icons/ai";
//serch icon
import { AiOutlineSearch } from "react-icons/ai";
//down arrow icon
import { AiOutlineDown } from "react-icons/ai";
import { MdPadding } from "react-icons/md";

export const Nav =()=>{
    return(
        <div className="nav">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navber-item">
                <div className="navber-item-list" >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/affectedares">Affected Area</a></li>
                        <li><a href="/aids">Aids</a></li>
                        <li><a href="/activity">Activity</a></li>
                        <li><a href="/currentactivity">Current Activity</a></li>
                        <li className="dropdown">
                            <a href="" className="dropbtn">Service<AiOutlineDown style={{marginLeft: "10px", paddingTop: "5px", fontWeight: "bold"}}/></a>
                            <div className="dropdown-content">
                                <a href="/trainingcenter">Trainig Center</a>
                                <a href="#">Trainig Products</a>
                                <a href="#">Medical Support</a>
                            </div>
                        </li>
                        <li><a href="/volunteer">Voluenteer</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="othernav">
                    <div className="serch">
                        <input type="text" placeholder="Serch here.."/>
                        <button><AiOutlineSearch/></button>
                    </div>
                </div>
            </div>
            
        </div>
       
    );
};