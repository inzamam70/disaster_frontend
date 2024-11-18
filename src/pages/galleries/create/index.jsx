import React ,{ useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export const GalleryCreate = ()=> {
    
    const navigate = useNavigate();

    const [image, setImage] = React.useState('');
    
    const imageChangeHandeler = (e) => {
        setImage(e.target.files[0]);
    }


   const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);

        await axios.post('http://localhost:8000/api/gallerys',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/be/gallerys")
            }
        })

     }

    return(
        <>
        <div className="home-container">
            <div className="home-container-header">
                <h4>Create Gallery Image</h4>
                <Link className="link" to="/be/galleries">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandeler}  >
                <p>Gallery Image Form</p>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" onChange={imageChangeHandeler} />
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