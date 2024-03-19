import React, { useEffect, useState } from 'react'
import SideBar from './sidebar/SideBar';
import axios from 'axios'
import "./ViewVenue.css";

export default function viewBookings () {
  const[bookings,setBookings]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/auth/user/bookings")
        .then((r)=>{
          setBookings(r.data);
        })
    })
    
  return (
    <div>
      <SideBar/>
      <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Venue</th>
            <th>VenuePrice</th>
            <th>Services</th>
            <th>ServicePrice</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
          {bookings.map((item, index) => (
            <tr key={item.bid}>
              <td>{item.event}</td>
              <td>{item.venue}</td>
              <td>{item.vprice}</td>
              <td>{item.service}</td>
              <td>{item.sprice}</td>
              <td>{item.status}</td>
              <td>

              <button id='approvebtn' onClick={()=>{
                axios.put(`http://localhost:8081/api/v1/auth/user/bookings/${item.bid}`,item)
                .then((r)=>console.log(r))
              }}>Approve</button>

              <button id='deletebtn' onClick={()=>{
                axios.delete(`http://localhost:8081/api/v1/auth/user/bookings/${item.bid}`)
                .then((r)=>console.log(r))
              }}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}









