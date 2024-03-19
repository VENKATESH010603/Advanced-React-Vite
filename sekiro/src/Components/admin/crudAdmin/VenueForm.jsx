// VenueForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './VenueForm.css'; // Import CSS file for styling

function VenueForm() {
  // Define state variables for form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    des: '',
    link: '',
    price: '',
    capacity: '',
    contactNum: '',
    avail: 'available',
    rating: ''
  });

  // Event handler to update form data when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
 
  
  return (
    <div className="form-container">
      <h2>Venue Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={formData.des} onChange={handleChange}/>
        </div>
        
        <div className="form-group">
          <label>Link:</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} min="0" required />
        </div>
        
        <div className="form-group">
          <label>Capacity:</label>
          <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} min="0" required />
        </div>
        
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" name="contactNum" value={formData.contactNum} onChange={handleChange} pattern="[0-9]{10}" required />
        </div>
        
        <div className="form-group">
          <label>Availability:</label>
          <select name="availability" value={formData.avail} onChange={handleChange} required>
            <option value="available">Yes</option>
            <option value="not-available">No</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Rating:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="0" max="5" step="0.1" required />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VenueForm;
