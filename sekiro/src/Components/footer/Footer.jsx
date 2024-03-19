import React from 'react'
import"./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return ( 
        // <div>
        //     <div className='footer'>
        //         <center>
        //         <h1 id='f1'>Jublix</h1>
        //         <p id='f1'>jublixevent@gmail.com</p>
        //         <p id='f1'> ©2024 by Jublix.</p>
        //         </center>
        //     </div>
        // </div>
        <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@jubilix.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Bookings</a></li>
              <li><a href="/services">Venues</a></li>
              <li><a href="/about">Galleria</a></li>
              <li><a href="/contact">Services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Stay connected on social media:</p>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Jubilix. All rights reserved.</p>
        </div>
      </footer>

     );
}

export default Footer;