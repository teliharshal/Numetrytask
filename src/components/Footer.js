import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h3>About Us</h3>
          <p>
            We are a passionate team committed to delivering the best services and experiences for our users.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
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
