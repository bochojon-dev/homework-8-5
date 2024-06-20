import React from "react";
import "../hero/Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <h3>Who we are and what we do</h3>
          <p>
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
