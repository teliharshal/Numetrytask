import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
       <img src="https://numetry.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-09-04-at-12.13.58.jpeg" alt="footerLogo"></img>
        </div>
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
          We offer top-notch services in web development,<br></br> 
          mobile app development,
          and more.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About Us</Link></li> 
           <li><Link to="/services">Services</Link></li>
           <li><Link to="/contact">Contact Us</Link></li> 
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email:abcinfo@gmail.com</p>
          <p>Phone: +91 9345522312</p>
          <p>Location: Pune, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 WWW.numety.in. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
