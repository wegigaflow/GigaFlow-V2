import React, { useState, useEffect } from 'react';
import arrowIcon from '../assets/Arrow-Contact.svg';
import logo from '../assets/Logo-1.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home'); // State to track the active link

  // Function to handle click event on nav items
  const handleLinkClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle keyboard interactions
  const handleKeyDown = (e, link) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleLinkClick(link);
    }
  };

  // Function to update active link based on scroll position
  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); // Assuming each section has a <section> tag
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    // Update the active link
    if (current) {
      setActiveLink(current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav_logo_gf">
        <img src={logo} alt="GigaFlow Logo" />
      </div>
      <ul className="nav_links_gf">
        <li
          className={`nav_item_gf ${activeLink === 'Home' ? 'active' : ''}`}
          tabIndex={0}
          onClick={() => handleLinkClick('Home')}
          onKeyDown={(e) => handleKeyDown(e, 'Home')}
        >
          Home
        </li>
        <li
          className={`nav_item_gf ${activeLink === 'Why Us' ? 'active' : ''}`}
          tabIndex={0}
          onClick={() => handleLinkClick('Why Us')}
          onKeyDown={(e) => handleKeyDown(e, 'Why Us')}
        >
          Why Us
        </li>
        <li
          className={`nav_item_gf ${activeLink === 'Our Services' ? 'active' : ''}`}
          tabIndex={0}
          onClick={() => handleLinkClick('Our Services')}
          onKeyDown={(e) => handleKeyDown(e, 'Our Services')}
        >
          Our Services
        </li>
        <li
          className={`nav_item_gf ${activeLink === 'Our Team' ? 'active' : ''}`}
          tabIndex={0}
          onClick={() => handleLinkClick('Our Team')}
          onKeyDown={(e) => handleKeyDown(e, 'Our Team')}
        >
          Our Team
        </li>
      </ul>
      <div className="nav_contact_gf_cont">
        <span
          className="nav_contact_gf_span"
          tabIndex={0}
          onClick={() => handleLinkClick('Contact Us')}
          onKeyDown={(e) => handleKeyDown(e, 'Contact Us')}
          aria-label="Contact Us"
        >
          Contact Us
        </span>
        <div className="nav_arrow_icon_gf">
          <img src={arrowIcon} alt="Contact Us Arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
