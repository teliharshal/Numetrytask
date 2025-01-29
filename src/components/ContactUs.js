import React, { useState } from 'react';
import '../style/contactUs.css';  // Correct relative path


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted Successfully!');
    // Here you can handle form submission (e.g., sending data to a server)
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <label>Message:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
