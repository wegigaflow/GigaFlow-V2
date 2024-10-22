import React from 'react';
import '../styles/HeroSection.css';
import handImage from '../assets/Hand.png'; // Your hand image
import mockupImage from '../assets/Mockup.png'; // The mockup image for devices
import buildIcon from '../assets/BYOW.png'; // Icon for "Build your Dream Website" button
import expertIcon from '../assets/TTE.png'; // Icon for "Talk to our Expert" button
import useScrollReveal from '../hooks/useScrollReveal';
const HeroSection = () => {
  const ref = useScrollReveal('animate__fadeIn', { threshold: 0.1 });
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact Us'); // Ensure this ID matches your Contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="Home" className="hero-section">
      {/* Header section with greeting */}
      <header className="greeting-section">
        <div className="greeting-icon-circle">
          <img src={handImage} alt="Wave hand icon saying Hi Buddies!" className="greeting-hand-icon" />
        </div>
        <h2 className="greeting-text">Hi Buddies!</h2> {/* Use h2 for better SEO */}
      </header>

      {/* Main Heading */}
      <main className="hero-heading-container">
        <h1 className="hero-heading">
          Building Future-Ready Websites for
        </h1>
        <h2 className="highlighted-text">
          <span className="ambitious-container">
            <span className="ambitious-text">Ambitious</span>
            <span className="corner-dot top-left"></span>
            <span className="corner-dot top-right"></span>
            <span className="corner-dot bottom-left"></span>
            <span className="corner-dot bottom-right"></span>
          </span>
          <span className="brands-text"> Brands</span>
        </h2>
      </main>

      {/* Subtext for SEO */}
      <p className="hero-subtext">
        We build websites and online platforms that enhance your business, attract customers, and drive growth. Partner with us to create a future-proof digital presence that aligns with your ambitions.
      </p>

      {/* Actionable Buttons */}
      <div className="hero-buttons">
        {/* Build Your Dream Website Button */}
        <div className="button-container-hero">
          <button
            className="button build-website-button"
            aria-label="Build your Dream Website"
            onClick={scrollToContact} // Add the onClick handler
          >
            Build your Dream Website
            <div className="icon-container-bw">
              <img src={buildIcon} alt="Build your Dream Website icon" className="button-icon" />
            </div>
          </button>
        </div>

        {/* Talk to Our Expert Button */}
        <div className="button-container-hero">
          <button
            className="button talk-expert-button"
            aria-label="Talk to our Expert"
            onClick={() => window.open('https://wa.me/918903844107', '_blank')}
          >
            Talk to our Expert
            <div className="icon-container-te">
              <img src={expertIcon} alt="Talk to our Expert icon" className="button-icon" />
            </div>
          </button>

        </div>
      </div>

      {/* Device Mockup */}
      <img src={mockupImage} alt="Mockup of devices showcasing a website design" className="device-mockup" loading="lazy" />
    </section>
  );
};

export default HeroSection;
