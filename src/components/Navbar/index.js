import React, { useEffect } from "react";
import "../../styles/navbar.css";
import zairzestLogo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      var nav = document.getElementsByClassName("navbar-container")[0];
      if (show) {
        nav.style.backgroundColor = "rgba(0,0,0,0.7)";
        nav.style.padding = "1.5rem 6rem";
      } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "2.5rem 6rem";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
