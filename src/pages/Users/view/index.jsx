
import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import axios from "axios";




export const UserView = () => {
    const { id } = useParams();
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        const callApi = async () => {
            const response = await axios.get(`http://localhost:8000/api/users/${id}`);
            if (response?.data?.success) {
                setUser(response?.data?.data);
            }
        };
        callApi();
    }, [id]);
    return (
        <div>
            <p>View</p>
            <div>
                <label>Name</label>
                <p>{user.name}</p>
            </div>
            <div>
                <label>Email</label>
                <p>{user.email}</p>
            </div>
        </div>
    );
};