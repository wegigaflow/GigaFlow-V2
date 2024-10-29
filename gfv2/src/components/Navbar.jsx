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

  useEffect(() => {
    // Create an intersection observer to monitor section visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          console.log(`Active Section: ${sectionId}`); // Debug log
          setActiveLink(sectionId);
        }
      });
    }, { threshold: 0.3 }); // Adjust threshold as needed

    // Target all sections to observe
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      // Cleanup observer on component unmount
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="nav_logo_gf">
        <img src={logo} alt="GigaFlow Logo" />
      </div>
      <ul className="nav_links_gf" role="menubar">
        <li className={`nav_item_gf ${activeLink === 'Home' ? 'active' : ''}`} role="none">
          <button
            className="nav_button_gf"
            onClick={() => handleLinkClick('Home')}
            onKeyDown={(e) => handleKeyDown(e, 'Home')}
            tabIndex={0}
            role="menuitem"
            aria-current={activeLink === 'Home' ? 'page' : undefined} // Indicates the active link
          >
            Home
          </button>
        </li>
        <li className={`nav_item_gf ${activeLink === 'Why Us' ? 'active' : ''}`} role="none">
          <button
            className="nav_button_gf"
            onClick={() => handleLinkClick('Why Us')}
            onKeyDown={(e) => handleKeyDown(e, 'Why Us')}
            tabIndex={0}
            role="menuitem"
            aria-current={activeLink === 'Why Us' ? 'page' : undefined}
          >
            Why Us
          </button>
        </li>
        <li className={`nav_item_gf ${activeLink === 'Our Services' ? 'active' : ''}`} role="none">
          <button
            className="nav_button_gf"
            onClick={() => handleLinkClick('Our Services')}
            onKeyDown={(e) => handleKeyDown(e, 'Our Services')}
            tabIndex={0}
            role="menuitem"
            aria-current={activeLink === 'Our Services' ? 'page' : undefined}
          >
            Our Services
          </button>
        </li>
        <li className={`nav_item_gf ${activeLink === 'Our Team' ? 'active' : ''}`} role="none">
          <button
            className="nav_button_gf"
            onClick={() => handleLinkClick('Our Team')}
            onKeyDown={(e) => handleKeyDown(e, 'Our Team')}
            tabIndex={0}
            role="menuitem"
            aria-current={activeLink === 'Our Team' ? 'page' : undefined}
          >
            Our Team
          </button>
        </li>
      </ul>
      <div className="nav_contact_gf_cont">
        <button
          className="nav_contact_gf_span"
          onClick={() => handleLinkClick('Contact Us')}
          onKeyDown={(e) => handleKeyDown(e, 'Contact Us')}
          tabIndex={0}
          aria-label="Contact Us"
          role="menuitem"
        >
          Contact Us
        </button>
        <div className="nav_arrow_icon_gf" role="img" aria-label="Contact Us Arrow" onClick={() => handleLinkClick('Contact Us')}
          onKeyDown={(e) => handleKeyDown(e, 'Contact Us')}
          tabIndex={0}>
          <img src={arrowIcon} alt="Contact Us Arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
