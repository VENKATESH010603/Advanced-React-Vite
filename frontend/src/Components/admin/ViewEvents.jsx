import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SideBar from './sidebar/SideBar';
import "./ViewVenue.css";

export default function ViewEvents() {
    const[events,setEvents]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/auth/admin/events")
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
            <th>Type</th>
            <th>Description</th>
            {/* <th>Contact No</th> */}
            <th>People</th>
            <th>Time</th>
            
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) => (
            <tr key={item.eid}>
              <td>{item.type}</td>
              <td>{item.des}</td>
              {/* <td>{item.contactNum}</td> */}
              <td>{item.peop}</td>
              <td>{item.time}</td>
              <td>

              <button id='deletebtn' onClick={()=>{
                // console.log("clicked")
                axios.delete(`http://localhost:8081/api/v1/auth/admin/events/${item.eid}`)
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
