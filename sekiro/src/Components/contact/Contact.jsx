import React from 'react';
import'../contact/contact.css'
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className="contact-page">
      
      <main className="contact-main1">
        <div className="contact-info-container">
          <div className="contact-info-left">
            <h2>Reach Out, Connect, Make a Difference Together.</h2>
            <p>We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
          </div>
          <div className="contact-info-right">
            <div>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p className="title1">Phone</p>
              <p>+1 123 456 7890</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p className="title1">Email</p>
              <p>info@jubilixexample.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p className="title1">Address</p>
              <p>123 Harmony Street, City, Country</p>
            </div>
          </div>
        </div>
        </main></div>
        <div className="google-map-container">
      <iframe
        title="Google Map"
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.786344944958!2d76.9583!3d10.9379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYour_Marker_Name!2sYour_Marker_Name!5e0!3m2!1sen!2sus!4v1643923772840!5m2!1sen!2sus"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
        <div className="contact-page">
      <main className="contact-main">
        <div className="contact-form-container">
          <form className="contact-form" action="#">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
    </div>
   
  

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

    
    </>
  );
};

export default ContactPage;