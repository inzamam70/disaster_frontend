// import React from "react";
// import { Link } from "react-router-dom";
// import "./index.css";
// import image from "../../assets/image/slide1.png";
// import image2 from "../../assets/image/slide2.png";
// import image3 from "../../assets/image/slide3.png";
// import image4 from "../../assets/image/slide3.jpg";
// import image5 from "../../assets/image/raj.png";
// import image6 from "../../assets/image/man.png";
// import image7 from "../../assets/image/disaster.png";
// import axios from "axios";


// export const Gallery = () => {
//     const [galleries, setGalleries] = React.useState([]);
//     const [showAll, setShowAll] = React.useState(false); 


//     React.useEffect(() => {
//         const callApi = async () => {
//             const response = await axios.get(`http://localhost:8000/api/gallerys`);
//             if (response?.data?.success) {
//                 setGalleries(response?.data?.data);
//             }
//         };
//         callApi();
//     }, []);

//     const handleSeeMore = () => {
//         setShowAll(!showAll); // Toggle the showAll state
//     };

//     return (
//         <>
//             <div className="gallery-section">

//                 <h1>Photo Gallery</h1>

//                 <div className="image-body">
//                     <div class="wrapper">
//                         {(showAll ? galleries : galleries.slice(0, 10)).map((gallery, index) => (
//                         <img src={`http://localhost:8000/${gallery.image}`} alt="" />
//                         ))}
//                     </div>
//                 </div>
//                 <button onClick={handleSeeMore} className="see-more-btn">
//                     {showAll ? "See Less--" : "See More--" }
//                 </button>
//             </div>
//         </>
//     );
// };

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Modal from '../modal'; // Import the modal component

export const Gallery = () => {
    const [galleries, setGalleries] = React.useState([]);
    const [showAll, setShowAll] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false); // State for modal visibility

    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/gallerys`);
            if (response?.data?.success) {
                setGalleries(response?.data?.data);
            }
        };
        callApi();
    }, []);

    const handleSeeMore = () => {
        setIsModalOpen(true); // Open modal instead of toggling showAll
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <>
            <div className="gallery-section">
                <h1>Photo Gallery</h1>
                <div className="image-body">
                    <div className="wrapper">
                        {(showAll ? galleries : galleries.slice(0, 10)).map((gallery, index) => (
                            <img key={index} src={`http://localhost:8000/${gallery.image}`} alt="" />
                        ))}
                    </div>
                </div>
                <button onClick={handleSeeMore} className="see-more-btn">
                    {showAll ? "See Less--" : "See More--"}
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}  >
                <>
                    <div className="gallery-section">
                        <h1>Photo Gallery</h1>
                        <div className="image-body">
                            <div className="wrapper">
                                {galleries.map((gallery, index) => (
                                    <img key={index} src={`http://localhost:8000/${gallery.image}`} alt="" className="img" />
                                ))}
                            </div>
                        </div>
                    </div>
                </> 
            </Modal>
        </>
    );
};
