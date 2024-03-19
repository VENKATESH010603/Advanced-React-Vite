import React, { useState,useEffect, useContext } from "react";
import "./Navbar2.css";
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "../context/context";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [scroll,setScroll]=useState("nav");
  const [name,setName]=useState("");
  const [flag,setFlag]=useState(false);
  const navigate=useNavigate();

  const[pop,setPop]=useContext(UserContext);
  const handleLogout=()=>{
    window.location.reload();
    localStorage.clear();
    navigate("/")
  }

  // useEffect(()=>{
  //   console.log(pop);
  // })

   useEffect(() => {
    setName(localStorage.getItem("name"))
    window.addEventListener("scroll",()=>{
      if(window.scrollY<900){
        console.log(window.scrollY)
        setScroll("nav");
      }else{
        setScroll("nav-fixed");
      }
      })
  })
 


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={scroll}>
      <Link to="/" className="nav__brand" id="nav-title">
        Jubilix
      </Link>
      <ul className={active}>
      {/* <li className="nav__item">
          <Link to="/" className="nav__link" onClick={(e)=>e.preventDefault}>
            Home
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to="/events" className="nav__link" onClick={(e)=>e.preventDefault}>
            Events
          </Link>
        </li>
        {/* <li className="nav__item">
          <Link to="/venues" className="nav__link">
            Venues
          </Link>
        </li> */}
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
        {
          name==null?"":<li className="nav__item">
          <Link to="/bookings" className="nav__link">
            Boookings
          </Link>
        </li>
        }
        
        {/* <li className="nav__item">
          <Link to="/photos" className="nav__link">
            Galleria
          </Link>
        </li> */}
        {
        pop ? <p>Hii,{localStorage.getItem("name").split("@")[0]}</p> :
        <li className="nav__item">
          <Link to ="/login" className="nav__link">Dashboard</Link>
        </li>
        }
        {
          pop?
        <li className="nav__item">
          <Link to ="/" className="nav__link" onClick={handleLogout}>Logout</Link>
        </li>:""
        }
        {/* {
          pop?
        <li className="nav__item">
          <Link to ="/login" className="nav__link">Login as Admin</Link>
        </li>:""
        } */}
        {/* {
            localStorage.getItem("name")== undefined?
            <li className="nav__item">
              <Link to ="/" className="nav__link" onClick={handleLogout}>Logout</Link>
            </li>:"hello"
           
        } */}
          </ul>

        
      <div onClick={navToggle} className={icon} id='logo'>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;