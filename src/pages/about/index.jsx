

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Nav } from "../../components/nav";
import image from "../../assets/image/bg.png";
import { Preloader } from "../../components/preloader";
//facebook icon
import { FaFacebookF } from "react-icons/fa";
//youtube icon
import { FaYoutube } from "react-icons/fa";
//twitter icon
import { FaTwitter } from "react-icons/fa";
//linkedin icon
import { FaLinkedinIn } from "react-icons/fa";
import { FooterUi } from "../../components/footerui";
import pic from "../../assets/image/img1.png";
import pic1 from "../../assets/image/img2.png";
import pic2 from "../../assets/image/img3.png";
import pic3 from "../../assets/image/img4.png";
import pic4 from "../../assets/image/img5.png";
import pic5 from "../../assets/image/img1.png";
import pic6 from "../../assets/image/slide4.jpg";
import axios from "axios";



export const About = () => {
    const [loading, setLoading] = React.useState(true);
    const [abouts, setabouts] = React.useState([]);
    const [showAll, setShowAll] = React.useState(false);

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/abouts`);
            if (response?.data?.success) {
                setabouts(response?.data?.data);
            }
        };
        callApi();
    }, []);


    // Simulating loading time with setTimeout
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    const handleSeeMore = () => {
        setShowAll(!showAll); // Toggle the showAll state
    };


    return (
        <>
            {loading ? <Preloader /> : null}
            <Nav />
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>About</li>
                </ul>
            </div>

            <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                    <div className="responsive-container-block leftSide">
                        <p className="text-blk heading">About Us</p>
                        <p className="subHeading">
                            Semaj Africa is an online education platform that delivers video
                            courses, programs and resources for Individual, Advertising &amp;
                            Media Specialist, Online Marketing Professionals, Freelancers and
                            anyone looking to pursue a career in digital marketing,
                            Accounting, Web development, Programming. Multimedia and CAD
                            design.
                        </p>
                    </div>
                    <div className="responsive-container-block rightSide">
                        <img
                            className="number1img"
                            src={pic1}
                        />
                        <img
                            className="number2img"
                            src={pic4}
                        />
                        <img
                            className="number3img"
                            src={pic2}
                        />
                        <img
                            className="number5img"
                            src={pic3}
                        />
                        <iframe
                            allowfullscreen="allowfullscreen"
                            className="number4vid"
                            poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
                            src="https://www.youtube.com/embed/fmm5W7Ut6rY"
                        ></iframe>
                        <img
                            className="number7img"
                            src={pic6}
                        />
                        <img
                            className="number6img"
                            src={pic5}
                        />
                    </div>
                </div>
            </div>

            <h2 className="text-blk heading">Meet Our Team</h2>

            <div className="card-section">
                <div className="card-section-card">
                    {(showAll ? abouts : abouts.slice(0, 3)).map((about) => (
                        <div className="card">
                            <div className="about-img">
                                <div className="about-img-content">
                                    <img src={`http://localhost:8000/${about.image}`} alt="image" />
                                    <h2>Famous <br></br><span>{about.designation}</span></h2>
                                    {/* <button className="button">Hire Me </button> */}
                                </div>

                            </div>
                            <h1>{about.name}</h1>
                            <p className="title">{about.designation}</p>
                            <p>
                                {about.description}
                            </p>
                            <button className="card-btn"> Contact</button>
                            <div className="social">
                                <a href="">
                                    <FaFacebookF />
                                </a>
                                <a href="">
                                    <FaYoutube />
                                </a>
                                <a href="">
                                    <FaTwitter />
                                </a>
                                <a href="">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


                <div>
                    <button className="see-more-btn" onClick={handleSeeMore}>
                        {showAll ? "See Less--" : "See More --"}
                    </button>
                </div>


            </div>
            <FooterUi />
        </>
    );
};
