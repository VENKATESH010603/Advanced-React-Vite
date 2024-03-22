import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
// import axios from 'axios'
import "./Services.css"
import axios from 'axios'
export default function Services() {
    const sources=[{"id":1,"name":"Decorations","link":"https://www.homelane.com/blog/wp-content/uploads/2022/02/shutterstock_614687651.jpg","desc":"Transform your outdoor space into a captivating haven with an array of festive decorations. "},
                    {"id":2,"name":"Photography","link":"https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/2756001/718310_567794.png","desc":"Capture the essence of the celebration that transforms fleeting moments into timeless memories. "},
                    {"id":3,"name":"Entertainment","link":"https://i0.wp.com/picjumbo.com/wp-content/uploads/party-dj-in-dance-music-club-free-photo.jpg?w=2210&quality=70","desc":"Immerse yourself in the electrifying atmosphere of our DJ party and live music orchestra fusion."}
                ]

    const [serv,setServices]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/auth/admin/services")
        .then((r)=>{
            setServices(r.data);
        })
    })

    const handleBookings =()=>{
        let se=localStorage.getItem("services");
        let ve=localStorage.getItem("venue");
        let ev=localStorage.getItem("event");
        let s=JSON.parse(se);
        let v=JSON.parse(ve);
        let e=JSON.parse(ev);
        if(s==null||v==null||e==null){
            alert("Choose all three services,venues,events")
        }else{

            let arr={"service":s.name,"venue":v.name,"event":e.type,
            "slink":s.link,"elink":e.link,"vlink":v.link,
            "status":"Pending","sprice":s.price,"vprice":v.price}
            console.log(arr);
            axios.post("http://localhost:8081/api/v1/auth/user/bookings",arr);
            alert("Booking Requested")
        }
    }

    
  return (
    <>
        <Navbar/>
        <div><center><h1 id='s-title'>SERVICES</h1></center></div>
        <div className='services'>
        
        {serv.map(serv=>
            <div className='venue'>
                <img src={serv.link}/>
                <center>
                <h1 id='s-name'>Service:{serv.name}</h1>
                    <center></center>
                    <i><p id='s-desc'>Price:${serv.price}</p></i> 
               
               <button onClick={
                ()=>{
                    localStorage.setItem('services',JSON.stringify(serv));
                    handleBookings();
                }
               }
               >Request Booking</button>
                </center>
               
            </div>
        )}
        </div>
        <Footer/>
    </>
  )
}
