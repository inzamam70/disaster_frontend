// src/components/PostNotification.js
import React, { useEffect, useState } from 'react';
import echo from '../../echo';

const PostNotification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        echo.channel('my-channel')
            .listen('.post-created', (event) => {
                setNotifications(prev => [...prev, event.post]);
            });

        return () => {
            echo.leave('my-channel'); // Clean up the channel on unmount
        };
    }, []);

    return (
        <div>
            <ul>
                {notifications.map((post) => (
                    <li key={post.id}>{post.title} was created!</li>
                ))}
            </ul>
        </div>
    );
};

export default PostNotification;
