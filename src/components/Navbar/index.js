import React from "react";
import "../../styles/navbar.css";
import zairzestLogo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="img-container">
        <img src={zairzestLogo} alt="" />
      </div>
      <div className="menu-container">
        <button onClick={() => navigate("/about")}>About Us</button>
        <button onClick={() => navigate("/signup")}>Register</button>
        <button onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
