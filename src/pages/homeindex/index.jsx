// import React, { useEffect, useState } from "react";  
// import { Route, Routes } from "react-router-dom";
// import "./index.css";
// import { Nav } from "../../components/nav";
// import { Slider } from "../../components/slider";
// // import GifLoader from "../../components/loader";
// // import Loader from "react-spinners/BarLoader";
// import { HashLoader } from "react-spinners";
// import { LandingPage } from "../../components/landingpage";
// import { Choose } from "../../components/choose";
// import { FooterUi } from "../../components/footerui";
// import { HomeSub } from "../../components/home-sub-section";
// import { AnimationHeader } from "../../components/animationheader";
// import { Gallery } from "../../components/gallery";
// import PostNotification from "../../components/postnotification";
// import { MessengerIcon } from "../../components/massenger";
// // import { ProfileLanding } from "../../components/profilelanding";



// export const HomeIndex = () =>{

//     // preloader for react loader
//     const Preloader = () => (
//         <div className="preloader">
//            {/* ciscle loader */}
//         <HashLoader color={"#123abc"} loading={true} /> 

//         </div>
//       );

  
//     //predoder function for react loader
//     // const [loading, setLoading] = useState(true);

//     // // Simulating loading time with setTimeout
//     // useEffect(() => {
//     //     const timer = setTimeout(() => {
//     //         setLoading(false);
//     //     }, 900); // Adjust the timeout as needed
//     //     return () => clearTimeout(timer);
//     // }, []);

//     const [loading, setLoading] = useState(true);

//     // Simulating loading time with setTimeout
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 900); // Adjust the timeout as needed
//         return () => clearTimeout(timer);
//     }, []);


//     return(
//         <div >
           
//             {/* react loader use */}
//             {loading ? <Preloader /> : null}

//             {/* <GifLoader loading={loading} /> */}
//             <Nav />
//             {/* <ProfileLanding /> */}
            
//             <Slider />
//             <PostNotification />
//             <AnimationHeader />
//             <HomeSub />
//             <LandingPage />
//             <Choose />
//             <Gallery />
//             <MessengerIcon />
//             <FooterUi />
//         </div>
//     );
// };

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Nav } from "../../components/nav";
import { Slider } from "../../components/slider";
import { HashLoader } from "react-spinners";
import { LandingPage } from "../../components/landingpage";
import { Choose } from "../../components/choose";
import { FooterUi } from "../../components/footerui";
import { HomeSub } from "../../components/home-sub-section";
import { AnimationHeader } from "../../components/animationheader";
import { Gallery } from "../../components/gallery";
import PostNotification from "../../components/postnotification";
import { MessengerIcon } from "../../components/massenger";
import { AdModal } from "../../components/advertise";

export const HomeIndex = () => {
    const [loading, setLoading] = useState(true);
    const [showAdModal, setShowAdModal] = useState(true); // State to control modal visibility

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900);
        return () => clearTimeout(timer);
    }, []);

    const handleCloseModal = () => setShowAdModal(false); // Function to close the modal

    return (
        <div>
            {loading ? <HashLoader color={"#123abc"} loading={true} /> : null}
            
            {/* Display the modal when showAdModal is true */}
          

            <Nav />
            <Slider />
            <PostNotification />
            <AnimationHeader />
            <HomeSub />
            <LandingPage />
            <Choose />
            <Gallery />
            {showAdModal && <AdModal onClose={handleCloseModal} />}
            <MessengerIcon />
            <FooterUi />
        </div>
    );
};
