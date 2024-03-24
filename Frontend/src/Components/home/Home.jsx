import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer';
// import HomeNavbar from '../navbar/HomeNavbar';
import Navbar from '../navbar/Navbar'

import "./Home.css"

export default function Home() {
  const navigate=useNavigate();
  const navServices=()=>{
    navigate("/services")
  }
  return (
    <>
    <Navbar/>
    <div className='home'>
        <div className='himg'>
          <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60e804a7-b463-4ca4-a470-1a8a64721dfa_1536x768.png'/>
        </div>
        <div className='hdesc'>
          <h1>Creating</h1>
          <h1>Unforgettable</h1>
          <h1>Memories!!</h1>
        </div>
        <div className='hserv'>
            <div className='serv'>
              <h2>
                <span>OUR</span>
                <span>SERVICES</span>
              </h2>
              <h3>
                <span>Turn your dream </span>
                <span>party into reality</span>
              </h3>
              <button onClick={navServices}>
                Discover
              </button>
            </div>
            <div className='servimg'>
                <img src='https://static.wixstatic.com/media/c19c76_69eada92e86a435a80761049f0211846~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1184,h_1018,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c19c76_69eada92e86a435a80761049f0211846~mv2_d_4896_3264_s_4_2.jpg'/>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
