import React, { useState, useEffect } from "react";
import "./index.css";

export const HumbergerSidenav = () => {
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(true);

    // Function to toggle burger menu and update local storage
    const updateMenu = () => {
        if (!isMenuClicked) {
            setMenuClass("menu hidden");
            setBurgerClass("burger-bar unclicked");
        } else {
            setMenuClass("menu visible");
            setBurgerClass("burger-bar clicked");
        }
        setIsMenuClicked(!isMenuClicked);
    };

    // Effect to load menu state from local storage on component mount
    useEffect(() => {
        const storedMenuState = localStorage.getItem("isMenuClicked");
        if (storedMenuState) {
            setIsMenuClicked(JSON.parse(storedMenuState));
        }
    }, []);

    // Effect to save menu state to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("isMenuClicked", JSON.stringify(isMenuClicked));
    }, [isMenuClicked]);

    return (
        <div>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>

            <div className={menuClass}></div>
        </div>
    );
};
