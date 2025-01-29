import React from "react";

function LoginForm({ toggleLoginForm, toggleSignUpForm }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={toggleLoginForm}>
          &times;
        </span>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Not a member?{" "}
          <button className="link-btn" onClick={toggleSignUpForm}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
