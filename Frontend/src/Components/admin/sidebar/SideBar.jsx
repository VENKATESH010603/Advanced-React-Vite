import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SideBar.css"

export default function SideBar() {
  const navigate=useNavigate();
  return (
    <div>
        <div className='admin-nav'>
            <h1>ADMIN DASHBOARD</h1>
        </div>
      <div className="sidebar">
      <div className="sidebar-header">
        <h3>DASHBOARD </h3>
      </div>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn">Venues</button>
        <div class="dropdown-content">
        <a href="/viewVenues">View Venues</a>
        <a href="/venueForm">Add Venues</a>
      
    </div>
</div>
      </ul>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn" onClick={()=>{navigate("/viewEvents")}}>Events</button>
        <div class="dropdown-content">
        <a href="/viewEvents">View Events</a>
        <a href="/eventForm">Add Events</a>
        </div>
</div>
      </ul>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn" onClick={()=>{navigate("/viewBookings")}}>Bookings</button>
        {/* <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div> */}
</div>
      </ul>
    </div>
    </div>
  )
}
