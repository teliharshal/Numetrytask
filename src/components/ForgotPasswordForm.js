import React from "react";

function ForgotPasswordForm({ toggleForgotPassword }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={toggleForgotPassword}>
          &times;
        </span>
        <h2>Forgot Password</h2>
        <p>Enter your email to receive a password reset link.</p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
