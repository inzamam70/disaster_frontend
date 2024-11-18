import React from "react";
import "./index.css";
import { Nav } from "../../components/nav";
import { Preloader } from "../../components/preloader";
import image from "../../assets/image/bg.png";
import image1 from "../../assets/image/slide3.jpg";
import Modal from "../../components/modal";
import { FooterUi } from "../../components/footerui";
import { ToastContainer, toast } from "react-toastify";

export const Activity = () => {
    const [loading, setLoading] = React.useState(true);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [open, setOpen] = React.useState(false);

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
        setOpen(true);
    };


    return (
        <>
            {loading ? <Preloader /> : null}
            <Nav />
            <ToastContainer />
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Activity</li>
                </ul>
            </div>
            <div className="activity">
                <div className="activity-content">
                    <h1>Our Activity</h1>
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
                            সঠিক তথ্য দিয়ে সাহায্য করি, বন্যার্তদের পাশে থাকি ।  <span>আমার গর্ব আমার দেশ , চলো গড়ি বাংলাদেশ । </span>     উত্তম কাজের প্রতিফল উত্তম পুরস্কার ছাড়া কী হতে পারে ? আল কুরআন ৫৫ঃ৬০ (সূরা আর-রহমান)
                        </h2>
                    </div>
                </div>
                <div className="activity-card-section">
                    <div className="activity-card">
                        <div className="card-img">
                            <img src={image1} alt="image" />
                        </div>
                        <div className="activity-card-content">
                            <h3>Flood Relife Distribution Continue...</h3>
                            <div className="card-text-scrollable">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                                    eget. Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Vitae, voluptatum tempora fugit et recusandae iure autem
                                    alias impedit dolores quas nostrum, enim quia fugiat magnam
                                    quasi minima ducimus, itaque dolorem! Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. Ipsam harum suscipit eius
                                    voluptate nam asperiores esse beatae non quod doloremque ad
                                    quaerat itaque neque officia facere, reiciendis saepe,
                                    deleniti tempora?
                                </p>
                            </div>
                            <button type="button" onClick={() => handleOpen()}>দান করুন</button>
                        </div>
                    </div>
                    <Modal isOpen={open} onClose={handleClose} >
                        <>
                            <div className="activity-modal">
                                <div className="card-img">
                                    <img src='' alt="image" />
                                </div>
                                <div className="affected-card-content">
                                    <h3>hi</h3>
                                    <p>hlw</p>
                                    <div className="modal-card-text-scrollable">
                                        <div className="aid-section">
                                            <h2>অনুদান</h2>
                                            <form className="aid-section-form-body" >
                                                <div className="form-content">
                                                    <label htmlFor="name">নাম</label>
                                                    <input type="text" placeholder="Enter Name" required />
                                                </div>
                                                <div className="form-content">
                                                    <label htmlFor="phone">মোবাইল</label>
                                                    <input type="number" placeholder="Enter phone no" required />
                                                </div>
                                                <div className="form-content">
                                                    <label htmlFor="email">ইমেইল</label>
                                                    <input type="email" placeholder="Enter Email" required />
                                                </div>
                                                <div className="form-content">
                                                    <label htmlFor="donet">অনুদানের পরিমাণ</label>
                                                    <input type="number" placeholder="Enter donet" required />
                                                </div>
                                                <input type="hidden" />

                                                <input type="hidden" />



                                                <div className="form-content">
                                                    <button className="load-more" onClick={notify}>দান করুন</button>

                                                </div>
                                            </form>
                                        </div>
                                        <div className="donet-card">
                                            <div>

                                            </div>
                                            <div>
                                                <p>অ্যাকাউন্টের নাম : As sunnah Foundation</p>
                                                <p>অ্যাকাউন্ট নম্বর : 20503100201496517</p>
                                                <p>ব্যাংক : Islami Bank Bangladesh PLC.</p>
                                                <p>শাখা : Badda, Dhaka</p>
                                                <p>সুইফট কোড : IBBLBDDH</p>
                                                <p>রাউটিং নাম্বার : 125260341</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </Modal>


                </div>

            </div>

            <FooterUi />
        </>
    );
};

