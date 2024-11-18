

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import "./index.css"; // Add necessary styles here

export const MessengerIcon = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [userId, setUserId] = useState(null); // Store user ID in state

    const toggleChatModal = () => {
        setIsChatOpen(!isChatOpen);
        if (!isChatOpen) {
            fetchMessages(); // Fetch messages when chat opens
        }
    };

    // Initialize Pusher and listen for messages
    useEffect(() => {
        const pusher = new Pusher("27eabd934c89858d65d0", {
            cluster: "ap2",
        });

        const channel = pusher.subscribe("chat");
        channel.bind("message-sent", function (data) {
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });

        // Cleanup on component unmount
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    // Function to fetch messages from the backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/massages');
            setMessages(response.data.data); // Assuming your API response format
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    // Fetch user ID from localStorage
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
            setUserId(user.id); // Set user ID if available in localStorage
        } else {
            console.error("User ID is not available in localStorage.");
        }
    }, []);

    // Function to send a message
    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!userId) {
            console.error("User ID is required to send a message.");
            return; // Prevent sending if user ID is not available
        }

        try {
            await axios.post('http://localhost:8000/api/massages', {
                user_id: userId, // Use the user ID retrieved from localStorage
                message: messageInput,
            });
            setMessageInput(""); // Clear the message input field after sending
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

    return (
        <div>
            {/* Messenger Icon */}
            <div className="messenger-icon" onClick={toggleChatModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                    <path d="M21 11.5a8.38 8.38 0 0 0-1.3-4.42A8.5 8.5 0 1 0 3.55 16.5L3 21l4.51-1.19A8.5 8.5 0 0 0 21 11.5z"></path>
                </svg>
            </div>

            {/* Chat Modal */}
            {isChatOpen && (
                <div className="chat-modal">
                    <div className="chat-modal-content">
                        <button className="chat-close-btn" onClick={toggleChatModal}>X</button>
                        <div className="chat-header">Chat with Us</div>
                        <div className="chat-body">
                            {/* Display chat messages */}
                            <div className="chat-messages">
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`chat-message ${msg.user_id === userId ? 'sent' : 'received'}`}>
                                        <div className="message-content">
                                            {/* Display the user's name */}
                                            <span className="username">{msg.user ? msg.user.name : "Unknown User"}</span>
                                            <p>{msg.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Message input */}
                            <form className="chat-input-form" onSubmit={handleSendMessage}>
                                <input
                                    type="text"
                                    value={messageInput}
                                    placeholder="Type a message..."
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    required // Optionally make this required for UX
                                />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

//aita o right

// import React, { useEffect, useState } from "react";
// import Pusher from "pusher-js";
// import axios from "axios";
// import "./index.css"; // Add necessary styles here

// export const MessengerIcon = () => {
//     const [isChatOpen, setIsChatOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [messageInput, setMessageInput] = useState("");
//     const [userId, setUserId] = useState(null); // Store user ID in state
//     const [roleId, setRoleId] = useState(null); // Store role ID in state

//     const toggleChatModal = () => {
//         setIsChatOpen(!isChatOpen);
//         if (!isChatOpen) {
//             fetchMessages(); // Fetch messages when chat opens
//         }
//     };

//     // Initialize Pusher and listen for messages
//     useEffect(() => {
//         const pusher = new Pusher("27eabd934c89858d65d0", {
//             cluster: "ap2",
//         });

//         const channel = pusher.subscribe("chat");
//         channel.bind("message-sent", function (data) {
//             setMessages((prevMessages) => [...prevMessages, data.message]);
//         });

//         // Cleanup on component unmount
//         return () => {
//             channel.unbind_all();
//             channel.unsubscribe();
//         };
//     }, []);

//     // Function to fetch messages from the backend
//     const fetchMessages = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/api/massages');
//             setMessages(response.data.data); // Assuming your API response format
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//         }
//     };

//     // Fetch user ID and role ID from localStorage
//     useEffect(() => {
//         const user = localStorage.getItem("user");
//         if (user) {
//             const parsedUser = JSON.parse(user);
            
//             // Ensure that the parsed object is not null and contains the properties you're expecting
//             if (parsedUser && parsedUser.active_role_id) {
//                 setRoleId(parsedUser.active_role_id); // Set the role ID
//             } else {
//                 console.error("active_role_id is not available in the user object.");
//             }
    
//             if (parsedUser && parsedUser.id) {
//                 setUserId(parsedUser.id); // Set the user ID
//             } else {
//                 console.error("User ID is not available in the user object.");
//             }
//         } else {
//             console.error("User data is not available in localStorage.");
//         }
//     }, []);
    
//     // Function to send a message
//     const handleSendMessage = async (e) => {
//         e.preventDefault();

//         if (!userId) {
//             console.error("User ID is required to send a message.");
//             return; // Prevent sending if user ID is not available
//         }

//         try {
//             await axios.post('http://localhost:8000/api/massages', {
//                 user_id: userId, // Use the user ID retrieved from localStorage
//                 message: messageInput,
//             });
//             setMessageInput(""); // Clear the message input field after sending
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }
//     };

//     return (
//         <div>
//             {/* Messenger Icon */}
//             <div className="messenger-icon" onClick={toggleChatModal}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
//                     <path d="M21 11.5a8.38 8.38 0 0 0-1.3-4.42A8.5 8.5 0 1 0 3.55 16.5L3 21l4.51-1.19A8.5 8.5 0 0 0 21 11.5z"></path>
//                 </svg>
//             </div>

//             {/* Chat Modal */}
//             {isChatOpen && (
//                 <div className="chat-modal">
//                     <div className="chat-modal-content">
//                         <button className="chat-close-btn" onClick={toggleChatModal}>X</button>
//                         <div className="chat-header">Chat with Us</div>
//                         <div className="chat-body">
//                             {/* Display chat messages */}
//                             <div className="chat-messages">
//                                 {messages.map((msg) => (
//                                     // Conditionally render messages based on user ID and role ID
//                                     (
//                                         // If the user is admin (roleId === 1), show all messages
//                                         // If the user is not admin, show only their own messages or admin messages (roleId === 1)
//                                         roleId === 1 || msg.user_id === userId || msg.role_id === 1
//                                     ) && (
//                                         <div key={msg.id} className={`chat-message ${msg.user_id === userId ? 'sent' : 'received'}`}>
//                                             <div className="message-content">
//                                                 {/* Display the user's name */}
//                                                 <span className="username">{msg.user ? msg.user.name : "Unknown User"}</span>
//                                                 <p>{msg.message}</p>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             {/* Message input */}
//                             <form className="chat-input-form" onSubmit={handleSendMessage}>
//                                 <input
//                                     type="text"
//                                     value={messageInput}
//                                     placeholder="Type a message..."
//                                     onChange={(e) => setMessageInput(e.target.value)}
//                                     required // Optionally make this required for UX
//                                 />
//                                 <button type="submit">Send</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

