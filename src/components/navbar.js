import { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/main.css";
import LoginForm from "./LoginForm"; // Import Login Form component
import SignUpForm from "./SignUpForm"; // Import Sign-Up Form component
import ForgotPasswordForm from "./ForgotPasswordForm"; // Import Forgot Password Form

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State for sign-up modal
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for forgot password modal
  const [isNavOpen, setIsNavOpen] = useState(false); // State for responsive nav

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle responsive navigation
  };

  const toggleLoginForm = () => {
    setIsLoginOpen(!isLoginOpen) // Toggle login form visibility
    setIsSignUpOpen(false); // Close Sign-Up form
    setShowForgotPassword(false); // Close Forgot Password form
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(true); // Show Forgot Password form
    setIsLoginOpen(false); // Close Login form
  };

  const toggleSignUpForm = () => {
    setIsSignUpOpen(!isSignUpOpen); // Toggle sign-up form visibility
    setIsLoginOpen(false); // Close Login form
    setShowForgotPassword(false); // Close Forgot Password form
  };

  return (
    <>
      <header className="header">
        <h3>Logo</h3>
        <nav className={isNavOpen ? "responsive_nav" : ""}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          


          {/* Login Button */}
          <a href="#" onClick={toggleLoginForm}>
            Login
          </a>

          {/* Close Button for Responsive Menu */}
          <button className="nav-btn nav-close-btn" onClick={toggleNav}>
            <FaTimes />
          </button>
        </nav>

        {/* Hamburger Menu */}
        <button className="nav-btn nav-open-btn" onClick={toggleNav}>
          <FaBars />
        </button>
      </header>

      {/* Login Form Modal */}
      {isLoginOpen && (
        <LoginForm
          toggleLoginForm={toggleLoginForm}
          toggleSignUpForm={toggleSignUpForm}
          toggleForgotPassword={toggleForgotPassword} // Pass function to LoginForm
        />
      )}

      {/* Sign-Up Form Modal */}
      {isSignUpOpen && <SignUpForm toggleSignUpForm={toggleSignUpForm} />}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <ForgotPasswordForm toggleForgotPassword={() => setShowForgotPassword(false)} />
      )}
    </>
  );
}

export default Navbar;
