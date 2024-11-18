import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

export const Sliders = () =>{
    const [sliders,setSliders] = React.useState([]);


    React.useEffect(()=>{
        const callApi = async ()=>{
           const response = await axios.get("http://localhost:8000/api/sliders");
           if(response?.data?.success){
                setSliders(response?.data?.data);
           }
        };
        callApi();
    },[]);

    const deleteHandler = async(id) =>{
        await axios.delete(`http://localhost:8000/api/sliders/${id}`);
        const response = await axios.get("http://localhost:8000/api/sliders");
        if(response?.data?.success){
            setSliders(response?.data?.data);
        }
    };

    return(
        <div className="home-container">
           <div className="home-container-header">
                <h4>Sliders</h4>
                <Link className="link" to="/be/sliderCreate">Add Slider</Link>
           </div>
            <table className="table">
                <thead className="table-head">
                    <tr>
                        <th>SlNo</th>
                        <th>Title</th>
                        <th>Short Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {sliders.map((slider, index) => (
                       
                        <tr  key={slider.id}>
                            <td>{index = index + 1}</td>
                            <td>{slider.title}</td>
                            <td>{slider.short_title}</td>
                            <td>{slider.description}</td>
                            {/* <td><img src={slider.image} alt="slider" style={{ width: 100, height: 100 }} /></td> */}
                            <td><img src={`http://localhost:8000/${slider.image}`} alt="slider" style={{ width: 100, height: 100 }} /></td>
                            <td className="action-btn">
                                <Link className="link" style={{ backgroundColor: 'blue',borderRadius: '50%',width:50,height:45,boxShadow:'grey' }} to={`/be/sliderEdit/${slider.id}`}><FaEdit /></Link>
                                <Link className="link" style={{ backgroundColor: 'green',borderRadius: '50%',width:50,height:45  }} to={`/be/sliderView/${slider.id}`} ><AiOutlineEye/></Link>
                                <button className="link" style={{ backgroundColor: 'red' ,borderRadius: '50%',width:50,height:45 }} type="button" onClick={()=>deleteHandler(slider.id)} ><FaTrash/></button>
                            </td>

                        </tr>
                   ))} 
                </tbody>
            </table>
        </div>
    );
};