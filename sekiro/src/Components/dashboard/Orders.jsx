import * as React from 'react';
import Link from '@mui/material/Link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState,useEffect } from 'react';

// const events=[{id:1,name:"Outdoor Wedding Party",link:"https://media.weddingz.in/images/7941daefa912e70969e8804792325945/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg",price:"150000",location:"Thrissur",dur:"",peop:"",phon:"",statu:"Pending"},
//                 {id:2,name:"Lagoon Wedding Hall",link:"https://image.wedmegood.com/resized/450X/uploads/member/3391766/1661512242_WhatsApp_Image_2022_08_26_at_4.29.53_PM__2_.jpeg",price:"80000",location:"Coimbatore",dur:"",peop:"",phon:"",statu:"Pending"},
//                 {id:3,name:"French Town Party Hall",link:"https://image.wedmegood.com/resized/800X/uploads/member/2876203/1646646852_WhatsApp_Image_2022_02_08_at_19.36.31.jpeg",price:"100000",location:"Coimbatore",dur:"",peop:"",phon:"",statu:"Pending"}
//               ]

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const[bookings,setBookings]=useState([]);
  const[venues,setVenues]=useState([]);
  const[events,setEvents]=useState([]);
  useEffect(() => {
    
    axios.get("http://localhost:8081/api/v1/auth/user/bookings")
    .then((r)=>{
      console.log(r.data)
      setBookings(r.data);
    });
    axios.get("http://localhost:8081/api/v1/auth/admin/venues")
    .then((r)=>{
      setVenues(r.data);
    })
    axios.get("http://localhost:8081/api/v1/auth/admin/events")
    .then((r)=>{
      setEvents(r.data);
    })
  },[])
  // const data=useSelector(state=>state)
// const bookings=data.allProducts.cartProduct
function filter_status(book) {
  return book.status == "pending";
}
function filter_status1(book) {
  return book.status == "approved";
}

var pending =bookings.filter(filter_status);
var approved=bookings.filter(filter_status1);
  return (
    <React.Fragment>
      <Title>Pending Bookings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Venue Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pending.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.venue.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{`$${row.venue.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Title>Approved Bookings</Title>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Venue Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {approved.map((row) => (
             <TableRow key={row.id}>
             <TableCell>{row.type}</TableCell>
             <TableCell>{row.date}</TableCell>
             <TableCell>{row.time}</TableCell>
             <TableCell>{row.venue.name}</TableCell>
             <TableCell>{row.status}</TableCell>
             <TableCell align="right">{`$${row.venue.price}`}</TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>

      <Title>Registered Venues</Title>
      <Table size="small">
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Contact Number</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {venues.map((row) => (
            <TableRow key={row.vid}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contactNum}</TableCell>
              <TableCell>{row.capacity}</TableCell>
              <TableCell>{row.avail}</TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
              <button onClick={()=>axios.delete(`http://localhost:8081/api/v1/auth/admin/venues/${row.vid}`)}>Delete</button>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Title>Registered Events</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>No. of Peoples</TableCell>
            <TableCell>Time</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map((row) => (
            <TableRow key={row.eid}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.des}</TableCell>
              <TableCell>{row.peop}</TableCell>
              <TableCell>{row.time}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}
