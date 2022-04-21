import React, { useEffect } from "react";
import "../../styles/navbar.css";
import zairzestLogo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import ham from "../../assets/menu.png";
import useWindowDimensions from "../../CustomHooks/windowDimension";

const Navbar = ({ scrollToZen, aboutUs, handleSidebar }) => {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();

  const location = useLocation();

 
  useEffect(() => {
    var nav = document.getElementsByClassName("navbar-container")[0];
    if(location.pathname!="/"){
      nav.style.backgroundColor = "rgba(0,0,0,0.9)";
    }else {
      nav.style.backgroundColor = "transparent";
      // nav.style.padding = "2.5rem 4rem";
    }
  },[location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      var nav = document.getElementsByClassName("navbar-container")[0];
      console.log(location.pathname)
      if (show ) {
        nav.style.backgroundColor = "rgba(0,0,0,0.7)";
        // nav.style.padding = "1.5rem 4rem";
      } else if(location.pathname=="/") {
        nav.style.backgroundColor = "transparent";
        // nav.style.padding = "2.5rem 4rem";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(width)

  return (
    <>
      <div className="navbar-container backdrop-blur-lg">
        <div
          className="img-container"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={zairzestLogo} alt="" />
        </div>
        {(width > 720) ? (
          <div className="menu-container">
            {aboutUs ? (
              <button onClick={() => scrollToZen()}>About Us</button>
            ) : (
              ""
            )}
            <button onClick={() => navigate("/signup")}>Register</button>
            <button onClick={() => navigate("/login")}>Sign In</button>
          </div>
        ) : (
          <div>
            <GiHamburgerMenu color="#fff" size={30} onClick={handleSidebar} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
