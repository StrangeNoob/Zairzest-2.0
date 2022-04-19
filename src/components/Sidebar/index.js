import React from "react";
import zairzestLogo from "../../assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ scrollToZen, handleSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-regalblue">
      <div className="flex justify-between py-4 px-4">
        <div className="w-2/5 my-auto">
          <img src={zairzestLogo} alt="" />
        </div>

        <div>
          <IoCloseSharp color="#fff" size={40} onClick={handleSidebar} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 w-full">
        <button
          className="text-white font-medium text-xl mb-8 w-full py-4 hover:bg-"
          onClick={() => {
            handleSidebar()
            navigate("/")
          }}
        >
          About Us
        </button>
        <button
          className="text-white font-medium text-xl mb-8 w-full py-4 hover:bg-"
          onClick={() => {
              handleSidebar();
              navigate("/signup");
          }}
        >
          Register
        </button>
        <button
          className="text-white font-medium text-xl w-full py-4 hover:bg-pinkPallete"
          onClick={() => {
              handleSidebar();
              navigate("/login");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
