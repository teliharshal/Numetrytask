import React, { useState } from "react";
import "../style/SignUpForm.css"; // Ensure correct CSS is applied

function SignUpForm({ toggleSignUpForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, phone, gender, dob } = formData;

    // Validation
    if (!name || !email || !password || !confirmPassword || !phone || !gender || !dob) {
      alert("All fields are required!");
      return;
    }

    if (password.length > 8) {
      alert("Password should be a maximum of 8 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number should be exactly 10 digits!");
      return;
    }

    alert("Form submitted successfully!");
    toggleSignUpForm(); // Close form after successful submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={toggleSignUpForm}>&times;</span>
        
        {/* Reduced spacing below the heading */}
        <h2 className="signup-heading">Registration</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
