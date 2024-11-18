import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

export const Preloader = () =>{
    
         const [loading, setLoading] = useState(true);

         // Simulating loading time with setTimeout
         useEffect(() => {
             const timer = setTimeout(() => {
                 setLoading(false);
             }, 900); // Adjust the timeout as needed
             return () => clearTimeout(timer);
         }, []);

         return(
             <div className="preloader">
                {/* ciscle loader */}
             <HashLoader color={"#123abc"} loading={true} /> 

             </div>
           );

};