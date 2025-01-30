import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar'; 
import Home from "./components/Home"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar - Unchanged */}
      <Navbar />

      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for Contact Us Form */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Other routes */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* Footer - Unchanged */}
      <Footer />
    </Router>
  );
}

export default App;
