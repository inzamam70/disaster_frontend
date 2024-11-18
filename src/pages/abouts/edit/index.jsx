import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export const AboutEdit = () => {
    const history = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [existingImage, setExistingImage] = useState(null);
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');

    function notify() {
        toast.success('About updated Successfully', {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#FF0000',
                color: '#ffffff', // White text
                borderRadius: '5px',
                padding: '10px',
            },
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/abouts/${id}`);
            if (response?.data?.success) {
                setName(response?.data?.data?.name);
                setDesignation(response?.data?.data?.designation);
                setDescription(response?.data?.data?.description);
                setExistingImage(response?.data?.data?.image);
                setFacebook(response?.data?.data?.facebook);
                setTwitter(response?.data?.data?.twitter);
                setLinkedin(response?.data?.data?.linkedin);
                setInstagram(response?.data?.data?.instagram);

                
            }


        };
        fetchData();
    }, [id]);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const designationChangeHandler = (e) => {
        setDesignation(e.target.value);
    }

    
    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }
    const imageChangeHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const facebookChangeHandler = (e) => {
        setFacebook(e.target.value);
    }

    const twitterChangeHandler = (e) => {
        setTwitter(e.target.value);
    }

    const linkedinChangeHandler = (e) => {
        setLinkedin(e.target.value);
    }

    const instagramChangeHandler = (e) => {
        setInstagram(e.target.value);
    }



    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('description', description);

        if (image) {
            formData.append('image', image);
        }
        formData.append('facebook', facebook || '');
        formData.append('twitter', twitter || '');
        formData.append('linkedin', linkedin || '');
        formData.append('instagram', instagram || '');

        formData.append('_method', 'PUT');

        await axios.post(`http://localhost:8000/api/abouts/${id}`, formData)
            .then((response) => {
                if (response?.data?.success) {
                    notify();
                    history('/be/abouts')
                }


            })

    };

    return (
        <>
            <ToastContainer />
            <div className="home-container">
                <div className="home-container-header">
                    <h4>Edit About Team</h4>
                    <Link className="link" to="/be/abouts">Back</Link>
                </div>
                <form className="form" onSubmit={submitHandler} >
                    <p>Edit Form</p>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={nameChangeHandler} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="designation">Designation</label>
                        <input type="text" value={designation} onChange={designationChangeHandler} />
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
                        <label htmlFor="facebook">Facebook</label>
                        <input type="text" value={facebook} onChange={facebookChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input type="text" value={twitter} onChange={twitterChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedin">Linkedin</label>
                        <input type="text" value={linkedin} onChange={linkedinChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="instagram">Instagram</label>
                        <input type="text" value={instagram} onChange={instagramChangeHandler} />
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={() => history('/')}>Cancel</button>
                        <button type="submit" onClick={notify}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
