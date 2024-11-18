import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

export const GalleryEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/gallerys/${id}`);
            if (response?.data?.success) {
                setExistingImage(response?.data?.data?.image);
            }
        };
        fetchData();
    }, [id]);

    
    const imageChangeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        if (image) {
            formData.append('image', image);
        }
        formData.append('_method', 'PUT');
    
        try {
            const response = await axios.post(`http://localhost:8000/api/gallerys/${id}`, formData);
            if (response?.data?.success) {
                history('/');
            } else {
                console.error('Error:', response.data.message);
            }
        } catch (error) {
            console.error('Upload failed:', error.response.data.message || error.message);
        }
    };
    

    return (
        <>
            <div className="home-container">
                <div className="home-container-header">
                    <h4>Edit Gallery Image</h4>
                    <Link className="link" to="/be/galleries">Back</Link>
                </div>
                <form className="form" onSubmit={submitHandler} >
                    <p>Gallery image Form</p>

                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" onChange={imageChangeHandler} />
                        {existingImage && <img src={`http://localhost:8000/${existingImage}`} alt="image" width={200} height={200} />}

                        {image && <img src={URL.createObjectURL(image)} alt="image" width={200} height={200} />}

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
