import React from "react";
import "./index.css";
import image from "../../assets/image/slide3.jpg";

export const HomeSub = () => {
    return(
        <>
            <div className="homesub">
                <div className="homesub-img">
                    <img src={image} alt="image" />
                </div>
                <p className="divaider">
                   
                </p>
                <div className="homesub-content">
                    <h1>Somethig About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quam, similique asperiores amet non placeat nulla aut esse nobis dolores nostrum voluptatem nihil a dicta quae iusto quisquam. Doloribus, voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facilis. Quisquam, quod. Quas, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugit. Quisquam, quod. Quas, quos.
                    </p>
                </div>
            </div>
        </>
    );
}