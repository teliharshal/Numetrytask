// src/components/Home.js
import React from "react";
import { Link } from 'react-router-dom';
import "../style/home.css"; // Add the new styles for home page

const Home = () => {
  return (
    <div className="home">
       {/* Hero Section */}
       <section className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>
          We are dedicated to providing the best web solutions for your needs.
          Explore our services and let us help you grow your online presence.
        </p>
      </section>


      <section className="info-section">
        <h2>About Our Services</h2>
        <p>
          We offer top-notch services in web development, mobile app development,
          and more. Our team of experts is committed to delivering high-quality
          solutions to help your business succeed online. Here are some of the
          services we offer:
        </p>
        
        {/* Card Section */}
        <div className="service-cards">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              We build responsive and modern websites that drive engagement and
              improve your online presence. Whether it's a personal blog or a
              business website, we've got you covered.
            </p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Our team develops custom mobile apps for both iOS and Android. We
              focus on providing seamless experiences for your users.
            </p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              We offer innovative UI/UX design solutions that improve the user
              experience and provide an intuitive interface for your website or
              app.
            </p>
          </div>
        </div>
      </section>

   <section className="get-in-touch">
  <div className="get-in-touch-content">
    <h2>Get in Touch</h2>
    <p>
      Feel free to reach out to us if you have any questions or if you'd like to get started on your project.
    </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
