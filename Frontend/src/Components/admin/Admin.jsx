import React from 'react'
import { Link } from 'react-router-dom'
import "./Admin.css"

export default function Admin() {
  return (
    <>
        <div className='admin'>
            <Link to='/viewBookings' id='a-link'>View All Bookings</Link>
            <Link to='/approveBookings' id='a-link'>Approve Bookings</Link>
            <Link to='/deleteBookings'id='a-link'>Delete Bookings</Link>
            {/* <Link to='/deleteBookings'id='a-link'>Add Venues</Link>
            <Link to='/deleteBookings'id='a-link'>View All Venues</Link>
            <Link to='/deleteBookings'id='a-link'>Edit Venues</Link>
            <Link to='/deleteBookings'id='a-link'>Delete Venues</Link> */}
        </div>
    </>
  )
}
