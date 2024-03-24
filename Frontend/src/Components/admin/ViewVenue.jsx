import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SideBar from './sidebar/SideBar';
import "./ViewVenue.css";

export default function ViewVenue() {
    const[events,setEvents]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/auth/admin/venues")
        .then((r)=>{
          setEvents(r.data);
        })
    })
    
  return (
    <div>
      <SideBar/>
      <div className="table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
            <th>Capacity</th>
            <th>Contact Number</th>
            <th>Availability</th>
            <th>Rating</th>
            
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) => (
            <tr key={item.eid}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.price}</td>
              <td>{item.capacity}</td>
              <td>{item.contactNum}</td>
              <td>{item.avail}</td>
              <td>{item.rating}</td>
              <td>

              <button id='deletebtn' onClick={()=>{
                // console.log("clicked")
                axios.delete(`http://localhost:8081/api/v1/auth/admin/venues/${item.vid}`)
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
