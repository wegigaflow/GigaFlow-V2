import React, { useState } from 'react';
import '../styles/Footer.css';
import GigaFlow from '../assets/Logo-1.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Linkedin from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address!',
      });
      return;
    }

    try {
      // POST request to store email in db.json
      await axios.post('http://localhost:3001/subscribe', { email });
      
      // Show SweetAlert on success
      Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: 'You have subscribed successfully.',
      });

      // Clear the email input field
      setEmail('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an issue subscribing. Please try again.',
      });
      console.error('Error subscribing:', error);
    }
  };

  return (
    <footer className="footer-container-gf">
      <div className="footer-top-section-gf">
        <div className="footer-logo-section-gf">
          <img className="footer-logo-gf" src={GigaFlow} alt="GigaFlow Logo" />
          <div className="footer-social-icons-gf">
            <a href="https://www.instagram.com/wegigaflow/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://x.com/gigaflowlabs" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="www.linkedin.com/in/gigaflow-labs" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-subscribe-section-gf">
          <div className="footer-subscribe-title-gf">Subscribe</div>
          <div className="footer-subscribe-form-gf">
            <input
              type="email"
              placeholder="Enter your Email"
              className="footer-input-gf"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="footer-subscribe-button-gf" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
          <div className="footer-privacy-text-gf">
            By subscribing this, You will agree to our <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>

      <div className="footer-divider-gf"></div>

      <div className="footer-bottom-section-gf">
        <div className="footer-copyright-gf">©GigaFlow - All Rights Reserved 2024</div>
        <div className="footer-links-container-gf">
          <div className="footer-links-gf">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
