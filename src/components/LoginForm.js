import { useState } from "react";
// import "../style/LoginForm.css"; // Ensure you have styles for the modal

const LoginForm = ({ toggleLoginForm, toggleSignUpForm, toggleForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // Success popup state

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Login Successful!"); // Show success alert
    toggleLoginForm(); // Close the login form
  };
 

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={toggleLoginForm}>&times;</span>
        <h2>Login</h2>
        
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p onClick={toggleForgotPassword} className="forgot-password">
          Forgot Password?
        </p>
        <p onClick={toggleSignUpForm} className="signup-link">
          Don't have an account? Register.
        </p>
      </div>

      {/* Success Popup */}
      {showSuccess && <div className="popup">Login Successful!</div>}
    </div>
  );
};

export default LoginForm;
