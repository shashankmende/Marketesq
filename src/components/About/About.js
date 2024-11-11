import React from "react";
import "./About.css";
import profile from "../../images/profile.png";
import { IoStarSharp } from "react-icons/io5";
import river from "../../images/river2.png";

const About = () => {
  return (
    <div className="section-about">
      <h2>About Us</h2>
      <div className="container grid grid-three-cools">
        <div className="about-1--div">
          <div className="profile-container">
            
            <div className="names-stars--container">
              <h2>Our Mission</h2>
              
            </div>
          </div>
          <p>
            We are a team dedicated to creating experiences that bring people closer to nature. Our aim is to provide memorable stays in Ladakh, offering personalized service and unique experiences that you'll cherish forever.
          </p>
        </div>
        <div className="about-2--div">
          
          <div className="about-1--div">
            <div className="profile-container">
              
              <div className="names-stars--container">
                <h2>Our Team</h2>
                
              </div>
            </div>
            <p>
              Our team consists of passionate individuals with deep knowledge of Ladakh’s culture, traditions, and landscapes. Together, we work to make your experience unforgettable.
            </p>
          </div>
        </div>
        <div className="about-3--div">
          <div className="about-1--div">
            <div className="profile-container">
              
              <div className="names-stars--container">
                <h2>Our Values</h2>
                
              </div>
            </div>
            <p>
              Our core values revolve around sustainability, hospitality, and adventure. We believe in making a positive impact on both our guests and the local community, ensuring an enriching experience for all.
            </p>
          </div>
          
        </div>
        <div className="about-1--div">
            <div className="profile-container">
              
              <div className="names-stars--container">
                <h2>Why Choose Us</h2>
                
              </div>
            </div>
            <p>
              We offer bespoke travel experiences with a personal touch. Whether you're here for adventure or relaxation, we customize every trip to meet your needs and exceed your expectations.
            </p>
          </div>
      </div>
    </div>
  );
};

export default About;
    