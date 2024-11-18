import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Nav } from "../../components/nav";
import { Preloader } from "../../components/preloader";
import image from "../../assets/image/bg.png";
import { FooterUi } from "../../components/footerui";
import image1 from "../../assets/image/slide1.png";
import { AiOutlineAlert, AiOutlineEnvironment } from "react-icons/ai";
//manypeople icon
import { FaUserFriends } from "react-icons/fa";

export const TrainingCenter = () => {
    const [loading, setLoading] = React.useState(true);

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
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Training Center</li>
                </ul>
            </div>
            <div className="training-center">
                <div className="activity-content">
                    <h1>Training Center</h1>
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
                            "প্রশিক্ষণ কেন্দ্রে যোগ দিতে আপনাকে অবশ্যই স্বেচ্ছাসেবক নিবন্ধন করতে হবে...!" "যদি আগে থেকে নিবন্ধন করা থাকে, তাহলে লগইন অপশনে গিয়ে আপনার তথ্য দিয়ে লগইন করুন।" <span>আমার গর্ব আমার দেশ , চলো গড়ি বাংলাদেশ । </span>  যে একটি সৎকর্ম করবে, সে তার দশগুণ (প্রতিদান) পাবে এবং যে একটি মন্দ কাজ করবে, সে তার সমান শাস্তিই পাবে। বস্তুত তাদের প্রতি জুলুম করা হবে না।' (সুরা আনআম : আয়াত ১৬০)
                        </h2>
                    </div>
                </div>
                <div className="activity-card-section">
                    <div className="activity-card">
                        <div className="card-img">
                            <img src={image1} alt="image" />
                        </div>
                        <div className="affected-activity-card-content">
                            <h3><AiOutlineEnvironment /> Khulna Paikgacha</h3>
                            <h1><FaUserFriends /> Ability=  400</h1>
                            <div className="card-text-scrollable">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                                    eget.
                                </p>
                            </div>
                            <Link to="/volunteer" className="link-card-btn">Join Now</Link>

                        </div>
                    </div>
                </div>
            </div>

            <FooterUi />
        </>


    );
};