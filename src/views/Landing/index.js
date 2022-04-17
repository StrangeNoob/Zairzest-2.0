import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/landing.css";
import VR from "../../assets/VR-MAN.png";

const Landing = () => {
  return (
    <div className="Landing-container">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Experience the Future Tech with Zairza</h1>
          <p>
            Release all your stress with the exciting Tech and Fun events in the
            most awaited fest. Zairza 2.0 presented by Zairza.
          </p>
          <button>
            <p>Register Now</p>
          </button>
        </div>
        <img src={VR} alt="" />
      </div>
    </div>
  );
};

export default Landing;
