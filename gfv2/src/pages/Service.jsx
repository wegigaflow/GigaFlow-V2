import React from 'react';
import '../styles/Service.css';
import What from '../assets/WWD.png';
import WebDev from '../assets/WebDev.png';
import WebDesign from '../assets/WD.png';
import SEO from '../assets/SEO.png';
import DigitalMarketing from '../assets/DM.png';
import ECommerce from '../assets/Ecom.png';
import CRM from '../assets/crm.png';
import IMP from '../assets/IMP.png';
import DataAnalytics from '../assets/Da.png';
import useScrollReveal from '../hooks/useScrollReveal';

const Service = () => {
  const ref = useScrollReveal('animate__fadeIn', { threshold: 0.1 });
  return (
    <div id="Our Services" className="service-container">
      <div className="service-content">
        <div className="service-header">
          <div className="service-header-background">
            <div className="service-header-text">What we do?</div>
            <div className="service-icon-container">
              <div className="service-icon-background" />
              <img className="service-icon" src={What} alt="icon" />
            </div>
          </div>
        </div>
        <h2 className="service-title">Our Services</h2>
        <div className="service-cards-container">
          <div className="service-row">
            <div className="service-card">
              <img src={WebDev} alt="Web Development" className="service-card-img" />
              <div className="service-card-title">Web Development</div>
            </div>
            <div className="service-card">
              <img src={WebDesign} alt="Web Designing" className="service-card-img" />
              <div className="service-card-title">Web Designing</div>
            </div>
            <div className="service-card">
              <img src={SEO} alt="SEO Optimization" className="service-card-img" />
              <div className="service-card-title">SEO Optimization</div>
            </div>
            <div className="service-card">
              <img src={DigitalMarketing} alt="Digital Marketing" className="service-card-img" />
              <div className="service-card-title">Digital Marketing</div>
            </div>
          </div>
          <div className="service-row">
            <div className="service-card">
              <img src={ECommerce} alt="E-Commerce Development" className="service-card-img" />
              <div className="service-card-title">E-Commerce Development</div>
            </div>
            <div className="service-card">
              <img src={CRM} alt="CRM Development" className="service-card-img" />
              <div className="service-card-title">CRM Development</div>
            </div>
            <div className="service-card">
              <img src={IMP} alt="Inventory Management Portal" className="service-card-img" />
              <div className="service-card-title">Inventory Management Portal</div>
            </div>
            <div className="service-card">
              <img src={DataAnalytics} alt="Data Analytics" className="service-card-img" />
              <div className="service-card-title">Data Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
