import React from "react";
import { ReactDOM } from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="HeroDiv">
        <div className="HeroMessage">
          <h2>IoT is Revolutioning the World</h2>
          <p>Are you looking for a connected devices and integration</p>
          <div className="Explore">
            <button className="Button1">Explore More</button>
            <button className="Button1">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
