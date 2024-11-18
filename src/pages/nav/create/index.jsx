import React ,{ useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export const NavCreate = ()=> {
    
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [position, setPosition] = React.useState('');
    
    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }

    const urlChangeHandeler = (e) => {
        setUrl(e.target.value);
    }

    const positionChangeHandeler = (e) => {
        setPosition(e.target.value);
    }

   const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('url',url);
        formData.append('position',position);

        await axios.post('http://localhost:8000/api/navs',formData)
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
                <h4>Create Nav Item</h4>
                <Link className="link" to="/be/navs">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandeler}  >
                <p>Nav Form</p>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={nameChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url</label>
                    <input type="text" value={url} onChange={urlChangeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" value={position} onChange={positionChangeHandeler} />
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