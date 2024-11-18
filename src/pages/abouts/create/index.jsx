import React ,{ useState } from "react";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import Pusher from 'pusher-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AboutCreate = ()=> {
    
    const navigate = useNavigate();
    const [name,setName]= React.useState('');
    const [designation,setDesignation]= React.useState('');
    const [description,setDescription]= React.useState('');
    const [image,setImage]= React.useState();
    const [facebook,setFacebook]= React.useState('');
    const [twitter,setTwitter]= React.useState('');
    const [linkedin,setLinkedin]= React.useState('');
    const [instagram,setInstagram]= React.useState('');
    const [abouts, setAbouts] = React.useState([]);

    function notify() {
        toast.success('About Created Successfully', {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#4caf50', // Green background
                color: '#ffffff', // White text
                borderRadius: '5px',
                padding: '10px',
            },
        });
    }

    React.useEffect(() => {
        const pusher = new Pusher('27eabd934c89858d65d0', {
            cluster: 'ap2',
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            // Show toast notification
            notify(); // Call the notify function when the event occurs

            // Optionally, update your state or perform other actions
            setAbouts((prev) => [...prev, data]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }

    const designationChangeHandeler = (e) => {
        setDesignation(e.target.value);
    }


    const descriptionChangeHandeler = (e) => {
        setDescription(e.target.value);
    }


    const imageChangeHandeler = (e) => {
        setImage(e.target.files[0]);
    }

    const facebookChangeHandeler = (e) => {
        setFacebook(e.target.value);
    }

    const twitterChangeHandeler = (e) => {
        setTwitter(e.target.value);
    }

    const linkedinChangeHandeler = (e) => {
        setLinkedin(e.target.value);
    }

    const instagramChangeHandeler = (e) => {
        setInstagram(e.target.value);
    }


    const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('designation',designation);
        formData.append('description',description);
        formData.append('image',image);
        formData.append('facebook',facebook);
        formData.append('twitter',twitter);
        formData.append('linkedin',linkedin);
        formData.append('instagram',instagram);

        await axios.post('http://localhost:8000/api/abouts',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/be/abouts")
            }
        })
    }
    
    return(
        <>
        <ToastContainer />
        <div className="home-container">
            <div className="home-container-header">
                <h4>Create About Team</h4>
                <Link className="link" to="/be/abouts">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandeler}  >
                <p>About Team Form</p>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={nameChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" value={designation} onChange={designationChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={description} onChange={descriptionChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file"  onChange={imageChangeHandeler} />
                    {image && <img src={URL.createObjectURL(image)} alt="image" width={200} height={200} />}
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" value={facebook} onChange={facebookChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" value={twitter} onChange={twitterChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input type="text" value={linkedin} onChange={linkedinChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" value={instagram} onChange={instagramChangeHandeler} />
                </div>
                <div className="form-group">
                     
                     <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                     <button type="submit" onClick={notify}>Submit</button>
                </div>
               
            </form>
        </div>
        </>
    );
}