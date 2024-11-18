// import React from "react";
// import { BarLoader } from "react-spinners";

// const Loader = () => (
//   <div className="preloader">
//     <BarLoader color={"#123abc"} loading={true} />
//   </div>
// );

// export default Loader;

import React from "react";
import Logo from "../../assets/image/audi.png";
import "./index.css";

const GifLoader = ({ loading }) => (
  <div className="gif-loader">
    {loading && <img src={Logo} alt="Loading..." />}
  </div>
);

export default GifLoader;