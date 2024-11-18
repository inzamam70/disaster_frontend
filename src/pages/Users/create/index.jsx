import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

export const USerCreate = () => {
    const navigate= useNavigate(); //ak page theke onno page phatanor jonno

    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");


    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = async (e)=> {
        e.preventDefault(); //page reload bondo korar jonno
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);

        await axios.post('http://localhost:8000/api/users',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/")
            }
        })
    }
    return (
        <div>
            <p>Create Form</p>
            <form style={{display:'flex',flexDirection:'column'}} onSubmit={submitHandler}>
              <div>
              <label>Name</label>
                <input type="text" value={name} onChange={nameChangeHandler}/>
              </div>
                <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                <label>Password</label>
                <input type="password" value={password} onChange={passwordChangeHandler} />
                </div>
                <div>
                <button type="submit" >Submit</button>
                <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}