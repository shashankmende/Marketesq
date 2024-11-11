import React from "react";
import "./Hero.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import hero from "../../images/hero.png";
import Card from "../Card/Card";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container grid grid-two--cols">
          <div className="hero-section-1--div">
            <h1>
              Work from <br /> Ladakh
            </h1>
            <p>India's first true digital tourism ecosystem</p>
            <div className="icons-container">
              <p style={{ fontSize: "4rem" }}>
                <FaFacebook color="gray" />
              </p>
              <p style={{ fontSize: "4rem" }}>
                <AiFillInstagram color="gray" />
              </p>
            </div>
          </div>
          <div className="hero-img--container">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="hero-section-card-container">
          <Card page="home" />
        </div>
      </div>
    </>
  );
};

export default Hero;
