import React from 'react';
import "../style/AboutUs.css"
 // Correctly import image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="./background-banner-picture-image_1055931.jpg" alt="My Profile" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm <strong>Your Name</strong>, a passionate web developer with expertise in JavaScript, React, and front-end technologies. I specialize in building modern, responsive, and user-friendly web applications.
          </p>
          <p>
            I am currently pursuing engineering at Matoshri College of Engineering. I have hands-on experience working on projects in the real estate and portfolio website domains.
          </p>
          <p>
            Let's connect and build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
