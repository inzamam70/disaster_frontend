// import React from "react";
// import "./index.css";

// export const Choose = () => {
//     return (
//         <div className="choose">
//             <h1>Why Choose Us ?</h1>
//             <div className="choose-item">
//                 <div className="choose-card">
//                     <h2>Mission</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quam, similique asperiores amet non placeat nulla aut esse nobis dolores nostrum voluptatem nihil a dicta quae iusto quisquam. Doloribus, voluptatum?
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facilis. Quisquam, quod. Quas, quos.
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugit. Quisquam, quod. Quas, quos.
//                     </p>
//                 </div>
//                 <div className="choose-card">
//                     <h2>Vision</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.</p>
//                 </div>
//                 <div className="choose-card">
//                     <h2>Values</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.</p>
//                 </div>    
//             </div>
//         </div>
//     );
// }

import React from "react";
import "./index.css";

export const Choose = () => {
    return (
        <div className="choose">
            <h1>Why Choose Us ?</h1>
            <div className="choose-item">
                <div className="choose-card">
                    <h2>Mission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quam, similique asperiores amet non placeat nulla aut esse nobis dolores nostrum voluptatem nihil a dicta quae iusto quisquam. Doloribus, voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facilis. Quisquam, quod. Quas, quos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugit. Quisquam, quod. Quas, quos.
                    </p>
                </div>
                <div className="choose-card">
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.</p>
                </div>
                <div className="choose-card">
                    <h2>Values</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas. Quisquam, quod. Quas, quos.</p>
                </div>
            </div>

            <h1>Our Media</h1>
            <div className="media">
                <div className="pages">
                    <h4 className="page-heding">Facebook Page</h4>
                    <div className="facebook-page">
                        <iframe
                            title="Facebook Page"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063723265040%26mibextid%3DZbWKwL&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                            width="500"
                            height="500"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="yes"
                            frameBorder="0"
                            allow="encrypted-media"
                        ></iframe>

                    </div>
                </div>

                <div className="pages">
                    <h4 className="page-heding">Youtube Channel</h4>
                    <div className="youtube-channel">
                        <iframe
                            title="Youtube Channel"
                            width="400"
                            height="500"
                            src="https://www.youtube.com/embed/4OgeYGs0XNg?si=N7hAPWJwQFGYfcEL"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                
            </div>


        </div>
    );
}
