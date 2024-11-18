import React from "react";
import "./index.css";
import { Nav } from "../../components/nav";
import { Preloader } from "../../components/preloader";
import image from "../../assets/image/bg.png";
import image1 from "../../assets/image/slide1.png";
import Modal from "../../components/modal";
import { FooterUi } from "../../components/footerui";
import { AiOutlineEnvironment } from "react-icons/ai";
//crisis icon
import { AiOutlineAlert } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pusher from 'pusher-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const AffectedAreas = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(true);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [affectedares, setAffectedAreas] = React.useState([]);
    const [name, setName] = React.useState([]);
    const [phone, setPhone] = React.useState([]);
    const [email, setEmail] = React.useState([]);
    const [aid, setAid] = React.useState([]);
    const [qty, setQty] = React.useState([]);
    const [landingcard_id, setLandingCardId] = React.useState([]);
    const [user_id, setUserId] = React.useState([]);
    const [showAll, setShowAll] = React.useState(false);


    function notify() {
        toast.success('Aid Created Successfully', {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#4caf50', // Green background
                color: '#ffffff', // White text
                borderRadius: '5px',
                padding: '10px',
            },
        });
    }

    React.useEffect(() => {
        const pusher = new Pusher('27eabd934c89858d65d0', {
            cluster: 'ap2',
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            // Show toast notification
            notify(); // Call the notify function when the event occurs

            // Optionally, update your state or perform other actions
            setAffectedAreas((prev) => [...prev, data]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserId(user.id);
        }
    }, []);



    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }

    const phoneChangeHandeler = (e) => {
        setPhone(e.target.value);
    }

    const emailChangeHandeler = (e) => {
        setEmail(e.target.value);
    }

    const aidChangeHandeler = (e) => {
        setAid(e.target.value);
    }

    const qtyChangeHandeler = (e) => {
        setQty(e.target.value);
    }

    const landingcardidChangeHandeler = (e) => {
        setLandingCardId(e.target.value);
    }

    const useridChangeHandeler = (e) => {
        setUserId(e.target.value);
    }




    const submitHandeler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('aid', aid);
        formData.append('qty', qty);
        formData.append('landingcard_id', landingcard_id);

        formData.append('user_id', user_id);







        await axios.post('http://localhost:8000/api/aids', formData)
            .then((response) => {
                console.log(response.data);
                if (response?.data?.success) {
                    navigate("/")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }


    // Simulating loading time with setTimeout
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 900); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
        setSelectedCard(null);
    };

    const handleOpen = (card) => {
        setSelectedCard(card);
        setLandingCardId(card.id);

        setOpen(true);
    };





    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get("http://localhost:8000/api/landingcards");
            if (response?.data?.success) {
                setAffectedAreas(response?.data?.data);
            }
        };
        callApi();
    }, []);


    const handleSeeMore = () => {
        setShowAll(!showAll); // Toggle the showAll state
    };




    return (
        <>
            <div className="aa-container">

                {loading ? <Preloader /> : null}
                <Nav />
                <ToastContainer />
                <div className="breadcrums">
                    <img src={image} alt="image" />
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Affected Areas</li>
                    </ul>
                </div>
                <div className="activity">
                    <div className="activity-content">
                        <h1>Affected Areas</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                            lacus ex, sit amet blandit leo lobortis eget.
                        </p>
                    </div>
                    <div className="animation-header">
                        <div className="animation-header-container">
                            <h2>
                                সঠিক তথ্য দিয়ে সাহায্য করি, বন্যার্তদের পাশে থাকি ।  <span>আমার গর্ব আমার দেশ , চলো গড়ি বাংলাদেশ । </span>     উত্তম কাজের প্রতিফল উত্তম পুরস্কার ছাড়া কী হতে পারে ? আল কুরআন ৫৫ঃ৬০ (সূরা আর-রহমান)
                            </h2>
                        </div>
                    </div>
                    <div className="activity-card-section">


                        {(showAll ? affectedares : affectedares.slice(0, 4)).map((affectedarea, index) => (
                            <div className="activity-card" key={affectedarea.id || index}> {/* Use a unique identifier */}
                                <div className="card-img">
                                    <img src={`http://localhost:8000/${affectedarea.image}`} alt="image" />
                                </div>
                                <div className="affected-activity-card-content">
                                    <h3><AiOutlineEnvironment /> {affectedarea.title}</h3>
                                    <h1><AiOutlineAlert /> {affectedarea.affected_type}</h1>
                                    <div className="card-text-scrollable">
                                        <p>
                                            {affectedarea.description}
                                        </p>
                                    </div>
                                    <button type="button" onClick={() => handleOpen(affectedarea)}>
                                        Ask For Aid
                                    </button>
                                </div>
                            </div>
                        ))}
                        {selectedCard && (
                            <Modal isOpen={open} onClose={handleClose}>
                                <>
                                    <div className="activity-modal">
                                        <div className="card-img">
                                            <img src={`http://localhost:8000/${selectedCard.image}`} alt="image" />
                                        </div>
                                        <div className="affected-card-content">
                                            <h3><AiOutlineEnvironment />{selectedCard.title}</h3>
                                            <h1><AiOutlineAlert />{selectedCard.affected_type}</h1>
                                            <div className="modal-card-text-scrollable">
                                                <p>
                                                    {selectedCard.description}
                                                </p>
                                                <div className="aid-section">
                                                    <h2>Ask For Aid</h2>
                                                    <form className="aid-section-form-body" onSubmit={submitHandeler}>
                                                        <div className="form-content">
                                                            <label htmlFor="name">Name</label>
                                                            <input type="text" placeholder="Enter Name" required value={name} onChange={nameChangeHandeler} />
                                                        </div>
                                                        <div className="form-content">
                                                            <label htmlFor="phone">Phone No</label>
                                                            <input type="number" placeholder="Enter phone no" required value={phone} onChange={phoneChangeHandeler} />
                                                        </div>
                                                        <div className="form-content">
                                                            <label htmlFor="email">Email</label>
                                                            <input type="email" placeholder="Enter Email" required value={email} onChange={emailChangeHandeler} />
                                                        </div>
                                                        <div className="form-content">
                                                            <label htmlFor="aid">Aids</label>
                                                            <input type="text" placeholder="Enter Aid" required value={aid} onChange={aidChangeHandeler} />
                                                        </div>
                                                        <div className="form-content">
                                                            <label htmlFor="qty">Person Qty</label>
                                                            <input type="number" placeholder="Enter Person Qty" required value={qty} onChange={qtyChangeHandeler} />
                                                        </div>
                                                        <input type="hidden" value={landingcard_id} onChange={landingcardidChangeHandeler} />

                                                        <input type="hidden" value={user_id} onChange={useridChangeHandeler} />



                                                        <div className="form-content">
                                                            <button className="load-more" onClick={notify}>Submit</button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </Modal>
                        )}

                    </div>
                    <button onClick={handleSeeMore} className="see-more-btn">
                        {showAll ? "See Less--" : "See More--"}
                    </button>
                </div>

                <FooterUi />
            </div>

        </>
    );
};
