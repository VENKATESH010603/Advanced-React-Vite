import { useState, } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Home2 from './components/home/Home2'

import Navbar from './components/navbar/Navbar'
import Navbar2 from './components/navbar/Navbar2'

import Services from './components/services/Services'
import Login from './Components/login/Login'
import Signup from './components/signup/Signup'
import Dashboard from './components/dashboard/Dashboard'
import Gallery from './components/gallery/Gallery'
import Venues from './components/venues/Venues'
import { Provider } from 'react-redux';
import {store} from "./components/redux/reducer/store" 
import Bookings from './components/bookings/Bookings'
import Admin from './components/admin/Admin'

import ViewBookings from './components/admin/ViewBookings'
import ApprovedBookings from './components/bookings/ApprovedBookings'
import { UserContext } from './components/context/context'
import Contact from './components/contact/Contact'
import VenueForm from './components/admin/crudAdmin/VenueForm'
import EventForm from './components/admin/crudAdmin/EventForm'
import Event from './components/events/Event'
import SideBar from './components/admin/sidebar/SideBar'
import ViewEvents from './components/admin/ViewEvents'
import ViewVenue from './components/admin/ViewVenue'

// import HomeNavbar from './navbar/HomeNavbar'

import "./App.css"
import Footer from './components/footer/Footer'
function App() {


  const[pop,setPop]=useState(false);

  return (
    <>
    <Provider store={store}>
      <UserContext.Provider  value={[pop,setPop]}>
      <BrowserRouter>
     
      <div className="global">

        <Routes>
 
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nav' element={<Navbar />}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path="/events" element={<Event/>}></Route>
          <Route path='/photos' element={<Gallery/>}></Route>
          <Route path='/venues' element={<Venues/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/bookings' element={<Bookings/>}></Route>
          <Route path='/approvedBookings' element={<ApprovedBookings/>}></Route>
          <Route path='/viewBookings' element={<ViewBookings/>}></Route>
          <Route path='/viewEvents' element={<ViewEvents/>}></Route>
          <Route path='/viewVenues' element={<ViewVenue/>}></Route>
          <Route path='/venueForm' element={<VenueForm/>}></Route>
          <Route path='/eventForm' element={<EventForm/>}></Route>
          <Route path='/sideBar' element={<SideBar/>}></Route>
          <Route path='/home2' element={<Home2/>}></Route>
          <Route path='/nav2' element={<Navbar2/>}></Route>
       
        </Routes>
        </div>
        {/* <Footer/> */}


      </BrowserRouter>
      </UserContext.Provider>
      </Provider>
    </>
  )
}

export default App
