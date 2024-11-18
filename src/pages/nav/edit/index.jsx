import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

export const NavEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [position, setPosition] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/navs/${id}`);
            if (response?.data?.success) {
                setName(response?.data?.data?.name);
                setUrl(response?.data?.data?.url);
                setPosition(response?.data?.data?.position);
            }
        };
        fetchData();
    }, [id]);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const urlChangeHandler = (e) => {
        setUrl(e.target.value);
    }

    const positionChangeHandler = (e) => {
        setPosition(e.target.value);
    }
    



    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('url', url);
        formData.append('position', position);

        formData.append('_method', 'PUT');

        await axios.post(`http://localhost:8000/api/navs/${id}`, formData)
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
                    <h4>Edit Nav</h4>
                    <Link className="link" to="/be/navs">Back</Link>
                </div>
                <form className="form" onSubmit={submitHandler} >
                    <p>Nav Form</p>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={nameChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">Url</label>
                        <input type="text" value={url} onChange={urlChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <input type="text" value={position} onChange={positionChangeHandler} />
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
