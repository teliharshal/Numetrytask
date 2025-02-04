import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images (Make sure these are in your 'assets' folder)
// import storyImage from "../assets/story.jpg";
// import missionImage from "../assets/mission.jpg";
// import chooseUsImage from "../assets/choose-us.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-us-container">
      <h2 data-aos="fade-up">Know More About Best Website & Mobile Application Development Company</h2>
      <p>
      For Businesses to thrive in this highly competitive and fragmented market, embracing the right technology at the right time can make a significant difference.
      </p>
      <p>
      Numetry Technologies is a data-driven company creating salable, robust, reliable, and most importantly, user-friendly products that carve a niche for your business and strengthen your market positioning. With years of experience and a team fueled by passion, we work with your brand from the ground up and help unlock its truest potential. 
      </p>
     <p>
     We are the best website & application development company and also the best digital marketing agency India. We provide a myriad of services that include Mobile Application Development, Website Development, Custom Software Solution, Digital Marketing Services, Search Engine Optimization, IT Consulting, Cloud Services, QA & Testing, More. know more about our services.
     </p>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide every 5s
        className="text-slider"
      >
        {/* Slide 1 - Our Story */}
        <SwiperSlide>
          <div className="about-slide">
            <div className="image-container" data-aos="zoom-in">
              { <img src="../background-banner-picture-image_1055931.png" alt="Our Story" /> }
            </div>
            <div className="text-container" data-aos="fade-up">
              <h3>Our vision</h3>
              <p>
              Numetry Technologies endeavors to be the source that delivers success and competitive advantage to your business by employing the best industry practices and a team of experts to deliver world-class innovative products and services with value for money to our customers.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Our Mission */}
        <SwiperSlide>
          <div className="about-slide">
            <div className="image-container" data-aos="zoom-in">
              <img src="../background-banner-picture-image_1055931.png" alt="Our Mission" />
            </div>
            <div className="text-container" data-aos="fade-up">
              <h3>Our Mission</h3>
              <p>
              Numetry Technologies endeavors to be the source that delivers success and competitive advantage to your business by employing the best industry practices and a team of experts to deliver world-class innovative products and services with value for money to our customers.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Why Choose Us? */}
        <SwiperSlide>
          <div className="about-slide">
            <div className="image-container" data-aos="zoom-in">
               <img src="../background-banner-picture-image_1055931.png" alt="Why Choose Us" /> 
            </div>
            <div className="text-container" data-aos="fade-up">
              <h3>Why Choose Us?</h3>
              <p>
              Numetry Technologies is a data-driven company creating salable, robust, reliable, and most importantly, user-friendly products that carve a niche for your business and strengthen your market positioning. With years of experience and a team fueled by passion, we work with your brand from the ground up and help unlock its truest potential. 
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutUs;
