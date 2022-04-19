import React from "react";
import "../../styles/footer.css";
import twitter from "../../assets/twitter.png";
import mail from "../../assets/mail.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import zairza from "../../assets/zairza.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Want to know about us?</h1>
      <div className="flex align-center justify-between flex-col lg:flex-row">
        <p className="text-white text-lg w-full lg:w-1/2">
          Come and know more about Zairza and know more about our community to
          experience such more amazing stuffs.
        </p>
        <div className="socials flex items-center">
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:cet.sac.zairza@gmail.com"
          >
            <img src={mail} alt="" className=" bx-tada-hover" />
          </a>
          <a
            rel="”noreferrer”"
            target="_blank"
            href="https://github.com/zairza-cetb"
          >
            <img src={github} alt="" className=" bx-tada-hover" />
          </a>
          <a
            rel="”noreferrer”"
            target="_blank"
            href="https://www.instagram.com/zairza.outr"
          >
            <img src={instagram} alt="" className=" bx-tada-hover" />
          </a>
          <a
            rel="”noreferrer”"
            target="_blank"
            href="https://twitter.com/zairza_cetb"
          >
            <img src={twitter} alt="" className=" bx-tada-hover" />
          </a>
        </div>
      </div>
      <div className="text-white mt-12 flex align-center justify-between flex-col lg:flex-row">
        <p className="flex-2">
          OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha.
          <br />
          +91 7205400596, +91 7978909955
        </p>
        <div
          className="flex justify-start lg:justify-end flex-1 mt-8 lg:mt-0"
          style={{ alignItems: "center" }}
        >
          <i className="mr-4">Presented by</i>
          <img src={zairza} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
