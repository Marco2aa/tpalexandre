import React from "react";
import "./HeroSection.css";
import Button from "../Button/Button";
import image from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="text-button">
          <div className="text-container">
            <span className="text">LET'S</span>
            <span className="text">EXPLORE</span>
            <span className="text">UNIQUE</span>
            <span className="text">ITEMS .</span>
          </div>
          <Button
            onClick={handleButtonClick}
            title="DÉCOUVRIR LES PRODUITS"
            buttonWidth="326px"
            buttonHeight="46px"
          />
        </div>

        <img className="img" src={image} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
