import axios from "axios";
import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//edit icons
import { FaEdit, FaTrash } from "react-icons/fa";
//eye icon
import { AiOutlineEye } from "react-icons/ai";



export const Users = () => {
    const [users, setUsers] = useState([]);

    React.useEffect(() => {
        const callApi = async () => {

            const response = await axios.get("http://localhost:8000/api/users");
            if (response?.data?.success) {
                setUsers(response?.data?.data);
            }
        };
        callApi();
    }, []);

    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/${id}`);
        const response = await axios.get("http://localhost:8000/api/users");
        if (response?.data?.success) {
            setUsers(response?.data?.data);
        }
    };

    return (
        <div className="home-container">
           <div className="home-container-header">
                <h4>Users</h4>
           </div>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>Slno</th>
                        <th>Role</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.active_role?.name}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="action-btn">
                                <Link className="link" style={{ backgroundColor: 'blue', borderRadius: '50%', width: 50, height: 45, boxShadow: 'grey' }} to={`/be/userEdit/${user.id}`}>
                                    <FaEdit />
                                </Link>
                                <Link className="link" style={{ backgroundColor: 'green', borderRadius: '50%', width: 50, height: 45 }} to={`/be/userview/${user.id}`}>
                                    <AiOutlineEye />
                                </Link>
                                <button className="link" style={{ backgroundColor: 'red', borderRadius: '50%', width: 50, height: 45 }} type="button" onClick={() => deleteHandler(user.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

