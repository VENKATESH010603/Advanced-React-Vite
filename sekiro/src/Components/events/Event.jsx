import React, { useState,useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import "./Event.css"
import axios from 'axios'
import Footer from '../footer/Footer'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Event() {
  const [name,setName]=useState("");
  const [events,setEvents]=useState([]);
  useEffect(() => {
    setName(localStorage.getItem("name"));
    axios.get("http://localhost:8081/api/v1/auth/admin/events")
    .then((r)=>{
      setEvents(r.data);
    })
  }, [])

  const navigate=useNavigate();
  
  
  return (
    <>
    <Navbar/>
        <div><center><h1 id='s-title'>Events</h1></center></div>
        <div className='venues'>
        
        {events.map(e=>
            <div className='venue'>
                <img src={e.link}/>
                <h1 id='s-name'>{e.type}</h1>
               <p id='s-price'>{e.des}</p> 
               <p id='s-price'>People:{e.peop}</p> 
               <p id='s-price'>Time:{e.time}</p> 
               <center>
                {

                  name==null?"":<button onClick={()=>{
                    localStorage.setItem('event',JSON.stringify(e));
                    navigate("/")
                  }}>Choose Event</button>
                }
               
               </center>
              
            </div>
        )}
        </div>
        <Footer/>
        </>
  )
}
