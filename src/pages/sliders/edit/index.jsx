import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

export const SliderEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [shortTitle, setShortTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/sliders/${id}`);
            if (response?.data?.success) {
                setTitle(response?.data?.data?.title);
                setShortTitle(response?.data?.data?.short_title);
                setDescription(response?.data?.data?.description);
                setExistingImage(response?.data?.data?.image);
            }
        };
        fetchData();
    }, [id]);

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const shortTitleChangeHandler = (e) => {
        setShortTitle(e.target.value);
    }
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }
    const imageChangeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('short_title', shortTitle);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        formData.append('_method', 'PUT');

        await axios.post(`http://localhost:8000/api/sliders/${id}`, formData)
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
                    <h4>Edit Slider</h4>
                    <Link className="link" to="/be/sliders">Back</Link>
                </div>
                <form className="form" onSubmit={submitHandler} >
                    <p>Slider Form</p>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="short_title">Short title</label>
                        <input type="text" value={shortTitle} onChange={shortTitleChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={description} onChange={descriptionChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" onChange={imageChangeHandler} />
                        {image && <img src={URL.createObjectURL(image)} alt="preview" width={200} height={200} />}
                        {!image && existingImage && <img src={`http://localhost:8000/${existingImage}`} alt="existing" width={200} height={200} />}
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
