import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contacts = ()=>{

    const [contacts,setContacts] = React.useState([]);

    React.useEffect(()=>{
        const callApi = async()=>{
            const response = await axios.get("http://localhost:8000/api/contacts");
            if(response?.data?.success){
                setContacts(response?.data?.data);
            }
        };
        callApi();
    },[]);

    const deleteHandler = async(id)=>{
        await axios.delete(`http://localhost:8000/api/contacts/${id}`);
        const response = await axios.get("http://localhost:8000/api/contacts");
        if(response?.data?.success){
            setContacts(response?.data?.data);
        }
    };

    return(
        <div className="home-container">
           <h1 className="header-title">Contacts</h1>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>Slno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {contacts.map((contact, index) => (
                        <tr key={contact.id}>
                            <td>{index}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.subject}</td>
                            <td>{contact.message}</td>
                            <td className="action-btn">
                                <Link className="link" style={{ backgroundColor: 'blue' }} to={`/edit/${contact.id}`}>Edit</Link>
                                <Link className="link" style={{ backgroundColor: 'green' }} to={`/view/${contact.id}`}>View</Link>
                                <button className="link" style={{ backgroundColor: 'red' }} type="button" onClick={deleteHandler}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Contacts;