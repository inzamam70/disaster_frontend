import React ,{ useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

export const RoleCreate = ()=> {
    
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    
    const nameChangeHandeler = (e) => {
        setName(e.target.value);
    }


   const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);

        await axios.post('http://localhost:8000/api/roles',formData)
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
                <h4>Create Role Item</h4>
                <Link className="link" to="/be/roles">Back</Link>
            </div>
            <form className="form" onSubmit={submitHandeler}  >
                <p>Role Form</p>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={nameChangeHandeler} />
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