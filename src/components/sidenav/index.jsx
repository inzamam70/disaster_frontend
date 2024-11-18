

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Logo from "../../assets/image/man.png";

export const Sidenav = () => {
  const [sidenavs, setSidenav] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  useEffect(() => {
    const callApi = async () => {
      const response = await axios.get("http://localhost:8000/api/navs");
      if (response?.data?.success) {
        setSidenav(response?.data?.data);
      }
    };
    callApi();
  }, []);

  // Sort sidenavs based on position
  const sortedSidenavs = sidenavs.sort((a, b) => {
    return a.position - b.position; // Assumes position is a number; modify if it's a string
  });

  return (
    <div className="sidenav">
      <div className="profile">
        <img src={Logo} alt="logo" />
        <h2>{user?.name}</h2>
        <p>{user?.active_role?.name}</p>
      </div>
      <ul>
        {sortedSidenavs.map((sidenav, index) => (
          <li key={index}>
            <a href={sidenav.url}>{sidenav.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
