import React from 'react';
import '../styles/Hiw.css';

// Import your icons here
import IconSvg from '../assets/Bow.svg';
import discoveryIcon from '../assets/Discovery.png';
import designIcon from '../assets/Design.png';
import developmentIcon from '../assets/Development.png';
import testingIcon from '../assets/Test.png';
import supportIcon from '../assets/CS.png';

const HIW = () => {
  return (
    <div className="hiw-section">
      {/* Button */}
      <div className="hiw-button-container">
        <div className="hiw-button">
          <div className="hiw-button-background"></div>
          <div className="hiw-button-text">Build Your Own Website</div>
          <div className="hiw-button-icon-container">
            <div className="hiw-button-icon-background"></div>
            {/* Embedding the SVG directly into the button */}
            <img src={IconSvg} alt="Icon" className="hiw-button-svg-icon" />
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="hiw-heading">How It Works?</h2>
      <div className="hiw-steps">
      <div className="hiw-step">
        <div className="hiw-step-icon-container">
          <img src={discoveryIcon} alt="Discovery & Planning" className="hiw-step-icon" />
        </div>
        <h3>Discovery & Planning</h3>
        <p>We start by understanding your goals and crafting a strategic plan with clear timelines to ensure success.</p>
      </div>
      <div className="hiw-step">
        <div className="hiw-step-icon-container">
          <img src={designIcon} alt="Design & Prototyping" className="hiw-step-icon" />
        </div>
        <h3>Design & Prototyping</h3>
        <p>We create intuitive designs and wireframes that reflect your brand and provide a seamless user experience.</p>
      </div>

      <div className="hiw-step">
        <div className="hiw-step-icon-container">
          <img src={developmentIcon} alt="Development" className="hiw-step-icon" />
        </div>
        <h3>Development</h3>
        <p>Our team develops your project with clean, scalable code, ensuring it’s responsive and optimized for all devices.</p>
      </div>

      <div className="hiw-step">
        <div className="hiw-step-icon-container">
          <img src={testingIcon} alt="Testing & Launch" className="hiw-step-icon" />
        </div>
        <h3>Testing & Launch</h3>
        <p>We conduct thorough testing and then launch your website or app, making sure everything works flawlessly.</p>
      </div>

      {/* Step 5 */}
      <div className="hiw-step">
        <div className="hiw-step-icon-container">
          <img src={supportIcon} alt="Ongoing Support" className="hiw-step-icon" />
        </div>
        <h3>Ongoing Support</h3>
        <p>After launch, we provide continuous maintenance, updates, and performance monitoring to keep your solution running smoothly.</p>
      </div>
      </div>
    </div>
  );
};

export default HIW;
