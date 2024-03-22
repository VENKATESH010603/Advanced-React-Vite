// EventForm.jsx

import React, { useState } from 'react';
import axios from 'axios'
import './EventForm.css'; // Import CSS file for styling

function EventForm() {
  // Define state variables for form data
  const [formData, setFormData] = useState({
    type: '',
    link: '',
    des: '',
    peop: '',
    time: ''
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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/api/v1/auth/admin/events",formData)
    // Send form data to backend or perform any necessary actions
    console.log(formData);
    // You can add further logic here, like sending the data to a backend API
  };

  return (
    <div className="form-container">
      <h2>Event Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Link:</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} required />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={formData.des} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <label>Number of People:</label>
          <input type="number" name="people" value={formData.peop} onChange={handleChange}  />
        </div>
        
        <div className="form-group">
          <label>Time:</label>
          <input type="text" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EventForm;
