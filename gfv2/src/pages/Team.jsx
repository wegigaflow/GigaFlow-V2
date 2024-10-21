import React from "react";
import "../styles/Team.css";
import Gowthamaraj from '../assets/Gowthamaraj.jpg';
import Godreignelgin from '../assets/God.jpg';
import Gowthaam from '../assets/Gowthaam.jpg';
import Lingesh from '../assets/Lingesh.jpg';
import Dhayananth from '../assets/Dhayananth.jpg';
import Aditya from '../assets/Aditya.jpg';
import TopButtonIcon from '../assets/BYP.png'; // Assuming you have a SVG or PNG for the icon

const Team = () => {
  const teamMembers = [
    {
      name: "Gowthamaraj M S",
      position: "CEO & Founder",
      description: "Visionary leader crafting digital solutions that empower businesses to thrive in the online world.",
      imgSrc: Gowthamaraj,
    },
    {
      name: "GodreignElgin Y",
      position: "CEO & Co-Founder",
      description: "Strategic innovator transforming ideas into impactful experiences, driving growth and success.",
      imgSrc: Godreignelgin,
    },
    {
      name: "Gowthaam J",
      position: "Backend Developer",
      description: "Building robust foundations behind the scenes, ensuring our applications run smoothly and securely.",
      imgSrc: Gowthaam,
    },
    {
      name: "Lingesh T",
      position: "Frontend Developer",
      description: "Turning designs into reality, one pixel at a time, to create seamless user experiences.",
      imgSrc: Lingesh,
    },
    {
      name: "Dhayananth E",
      position: "Marketing Head",
      description: "Connecting creativity with strategy to elevate brands and foster lasting relationships with clients.",
      imgSrc: Dhayananth,
    },
    {
      name: "Aditya Krishna RS",
      position: "Support Team Head",
      description: "Your trusted ally in navigating challenges, delivering exceptional service and ensuring client satisfaction at every turn.",
      imgSrc: Aditya,
    }
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <div className="behind-product-container">
          <div className="behind-product-text">Behind your Product</div>
          <div className="top-button">
            <div className="top-button-circle">
              <img src={TopButtonIcon} alt="Top Button Icon" className="top-button-icon" />
            </div>
          </div>
        </div>
        <h2 className="team-title">Our Team</h2>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.imgSrc} alt={`${member.name}`} className="team-photo" />
            <div className="team-details">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
