import "../style/service.css"

const Services = () => {  // Renamed from "services" to "Services"
    return (
      <div className="services">
        <section className="info-section">
          <h2>Services</h2>
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
      </div>
    );
  };
  
  export default Services; // Updated to match the new component name
  