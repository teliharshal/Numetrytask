import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "../style/home.css"; // Ensure this file contains the updated styles
// import "../style/main.css";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  return (
   <div className="home"> 
  <div className="hero-section">
  <div>
     <h1>Welcome To Our Website</h1>
     <p>Numetry Technologies has been a leading Web and Mobile app development company in India.</p>
  </div>
  </div>
  <div className="about-company">
    <h3>What We Are</h3>
    <p>
    Numetry Technologies has been a leading Web and Mobile app development company in India providing IT solutions to USA, UK and Canada, Australia, Japan, Africa, Europe, UAE, India etc in every industry sector out there. Our web and mobile app developer’s assist to deliver a memorable experience and services that outsells and outshines your competitors online.
    </p>
    <p>
    We understand the challenges across business functions and recognize company values. With our razor-sharp strategy, we deliver customized and measurable solutions that perform. We aim to bring you ideas to life through our full-spectrum web and mobile app development services combined with our extensive industry experience that covers a wide array of industries with an international client base.
    </p>
    <p>
    During the initial stages of our journey, we started working with small-scale companies. However, in due course, we have been successful in spreading our reputation and fame to get a chance to provide software solutions for bigger organizations. Our developers in the past have solved extreme challenges faced during developing stages and have been successful in achieving the target and pleasing the clients. We continue to put in our efforts until we get feedback of 100% fulfillment from our clients.
    </p>
  </div>
  </div>
  );
};

export default Home;
