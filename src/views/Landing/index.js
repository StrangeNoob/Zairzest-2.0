import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/landing.css";
import VR from "../../assets/VR-man.webp";
import Mascot from "../../assets/mascot.png";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../CustomHooks/windowDimension";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const [isSidebar, setIsSidebar] = useState(false);

  const scrollToZen = () => {
    document.getElementById("about").scrollIntoView();
  };
  return isSidebar ? (
    <Sidebar
      scrollToZen={() => scrollToZen()}
      handleSidebar={() => {
        setIsSidebar(false);
      }}
    />
  ) : (
    <div className="Landing-container">
      <Navbar
        scrollToZen={() => {
          scrollToZen();
        }}
        aboutUs={true}
        handleSidebar={() => {
          setIsSidebar(true);
        }}
      />
      <div className="hero">
        <div className="hero-content">
          <h1>Experience the Future Tech with Zairza</h1>
          <p>
            Release all your stress with the exciting Tech and Fun events in the
            most awaited fest. Zairzest 2.0 presented by Zairza.
          </p>
          <button className="shadow-xl" onClick={() => navigate("/login")}>
            <p>Register Now</p>
          </button>
        </div>
        <img src={VR} alt="" />
      </div>
      <div className="second-section" id="about">
        <div className="img-container">
          <img src={Mascot} alt="" />
        </div>
        <div className="second-section-content">
          <h1>Zen will guide you</h1>
          <h3>Zest. For. Tech.</h3>
          <p>
            ‘The best way to live the future is to create it.’ Moving on from
            the safari around the tech forest, we now bring you the city of
            tech. Experience the new future with us. We shall lead you to
            explore through the suburb of the cybercity, to drive into various
            tech stacks, dev branches, recursion, trees and languages like
            firefox and python. The Best is yet to come. Stay tuned for
            something awesome!.
          </p>
        </div>
      </div>
      <div className="third-section">
        <h1>Events for you</h1>
        <div>
          <p>
            Everything has been made simple for you to scroll around and get the
            most out of the options available.
          </p>
        </div>
        <div className="event-container">
          <div
            className="card-container tech"
            onClick={() => navigate("/tech")}
          ></div>
          <div
            className="card-container management"
            onClick={() => navigate("/fun")}
          ></div>
          <div
            className="card-container fun"
            onClick={() => navigate("/workshop")}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
