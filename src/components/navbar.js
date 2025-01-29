import { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/main.css";
import LoginForm from "./LoginForm"; // Import Login Form component
import SignUpForm from "./SignUpForm"; // Import Sign-Up Form component

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State for sign-up modal
  const [isNavOpen, setIsNavOpen] = useState(false); // State for responsive nav

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle responsive navigation
  };

  const toggleLoginForm = () => {
    setIsLoginOpen(!isLoginOpen); // Toggle login form visibility
    setIsSignUpOpen(false); // Close Sign-Up form
  };

  const toggleSignUpForm = () => {
    setIsSignUpOpen(!isSignUpOpen); // Toggle sign-up form visibility
    setIsLoginOpen(false); // Close Login form
  };

  return (
    <>
      <header>
        <h3>Logo</h3>
        <nav className={isNavOpen ? "responsive_nav" : ""}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <a href="#services">Services</a>
          <Link to="/contact">Contact Us</Link>
          {/* Other links */}
        

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
      {isLoginOpen && <LoginForm toggleLoginForm={toggleLoginForm} toggleSignUpForm={toggleSignUpForm} />}

      {/* Sign-Up Form Modal */}
      {isSignUpOpen && <SignUpForm toggleSignUpForm={toggleSignUpForm} />}
    </>
  );
}

export default Navbar;
