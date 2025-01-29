import React from "react";

function SignUpForm({ toggleSignUpForm }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={toggleSignUpForm}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required />
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
