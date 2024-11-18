import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

export const RoleEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/roles/${id}`);
            if (response?.data?.success) {
                setName(response?.data?.data?.name);
            }
        };
        fetchData();
    }, [id]);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);

        formData.append('_method', 'PUT');

        await axios.post(`http://localhost:8000/api/roles/${id}`, formData)
            .then((response) => {
                if (response?.data?.success) {
                    history('/')
                }
            })

    };

    return (
        <>
            <div className="home-container">
                <div className="home-container-header">
                    <h4>Edit ROle</h4>
                    <Link className="link" to="/be/roles">Back</Link>
                </div>
                <form className="form" onSubmit={submitHandler} >
                    <p>Role Form</p>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={nameChangeHandler} />
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={() => history('/')}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
