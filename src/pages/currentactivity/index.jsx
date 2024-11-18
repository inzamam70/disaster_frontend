import React from "react";
import "./index.css";
import { Nav } from "../../components/nav";
import { Preloader } from "../../components/preloader";
import image from "../../assets/image/bg.png";
import image1 from "../../assets/image/slide1.png";
import Modal from "../../components/modal";
import { FooterUi } from "../../components/footerui";

export const CurrentActivity = () => {
    const [loading, setLoading] = React.useState(true);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [open, setOpen] = React.useState(false);

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
            <div className="breadcrums">
                <img src={image} alt="image" />
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Current Activity</li>
                </ul>
            </div>
            <div className="activity">
                <div className="activity-content">
                    <h1>Our Current Activity</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </p>
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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>
                    <Modal isOpen={open} onClose={handleClose} >
                        <>
                            <div className="activity-modal">
                                <div className="card-img">
                                    <img src={image1} alt="image" />
                                </div>
                                <div className="activity-card-content">
                                    <h3>Flood Relife Distribution Continue...</h3>
                                    <div className="modal-card-text-scrollable">
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
                                        <p className="text">
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

                                        <p className="text2">
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

                                </div>
                            </div>
                        </>
                    </Modal>

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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>


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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>


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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>

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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>

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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>

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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>

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
                            <button type="button" onClick={() => handleOpen()}>See More-</button>
                        </div>
                    </div>



                </div>
                <button type="button" className="load-more">Load More</button>
            </div>

            <FooterUi />
        </>
    );
};

