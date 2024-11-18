import React ,{ useState } from "react";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";

export const SliderCreate = ()=> {
    
    const navigate = useNavigate();

    const [title, setTitle] = React.useState('');
    const [short_title, setShortTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState();
    
    const titleChangeHandeler = (e) => {
        setTitle(e.target.value);
    }
    const short_titleChangeHandeler = (e) => {
        setShortTitle(e.target.value);
    }
    const descriptionChangeHandeler = (e) => {
        setDescription(e.target.value);
    }
    const imageChangeHandeler = (e) => {
        setImage(e.target.files[0]);
    }

   const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title',title);
        formData.append('short_title',short_title);
        formData.append('description',description);
        formData.append('image',image);


        await axios.post('http://localhost:8000/api/sliders',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/")
            }
        })
     }

    return(
        <>
        <div className="home-container">
            <div className="home-container-header">
                <h4>Create Slider</h4>
                <Link className="link" to="/be/sliders">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandeler}  >
                <p>Slider Form</p>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={titleChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="short_title">Short title</label>
                    <input type="text" value={short_title} onChange={short_titleChangeHandeler} />
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
                     
                     <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                     <button type="submit">Submit</button>
                </div>
               
            </form>
        </div>
        </>
    );
}