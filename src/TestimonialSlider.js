import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials dynamically
  useEffect(() => {
    fetch("/testimonials.json") 
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  // Automatic sliding
  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="client-image"
            />
            <h3 className="client-name">{testimonial.name}</h3>
            <StarRating rating={testimonial.rating} />
            <p className="client-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="nav-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default TestimonialSlider;