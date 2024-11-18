import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () =>{

    const navigate = useNavigate();

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [number,setNumber] = React.useState("");
    const [subject,setSubject] = React.useState("");
    const [message,setMessage] = React.useState("");

    const nameChangeHandeler = (e) =>{
        setName(e.target.value);
    }
    const emailChangeHandeler = (e) =>{
        setEmail(e.target.value);
    }
    const numberChangeHandeler = (e) =>{
        setNumber(e.target.value);
    }
    const subjectChangehandeler = (e) =>{
        setSubject(e.target.value);
    }
    const massageChangehandeler = (e) =>{
        setMessage(e.target.value);
    }

     const submitHandeler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('number',number);
        formData.append('subject',subject);
        formData.append('message',message);

        await axios.post('http://localhost:8000/api/contacts',formData)
        .then((response) => {
            if(response?.data?.success){
                navigate("/")
            }
        })
     }

    return(
        <div>
            <p>Contact Form</p>
            <form onSubmit={submitHandeler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameChangeHandeler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={emailChangeHandeler} />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" value={number} onChange={numberChangeHandeler}/>
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" value={subject} onChange={subjectChangehandeler} />
                </div>
                <div>
                    <label>Message</label>
                    <textarea value={message} onChange={massageChangehandeler}></textarea>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                    <button type="button" onClick={()=>navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default Contact;
