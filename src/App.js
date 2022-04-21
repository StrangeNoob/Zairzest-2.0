import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import FirebaseApp from "../src/FirebaseConfig";
import SignUp from "./views/SignUp/SignUp";
import RegisterUser from "./views/RegisterUser/RegisterUser";
import Landing from "./views/Landing";
import TechEvents from "./views/Events/TechEvents";
import FunEvents from "./views/Events/FunEvents";
import WorkshopEvents from "./views/Events/WorkshopEvents";
import ComingSoon from "./views/ComingSoon";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RegisterSuccess from "./views/RegisterSuccess";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const { pathname } = useLocation();
  const [isSidebar, setIsSidebar] = useState(false);

  const scrollToZen = () => {
    document.getElementById("about").scrollIntoView();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return isSidebar ? (
    <Sidebar
      handleSidebar={() => {
        setIsSidebar(false);
      }}
      aboutUs={false}
    />
  ) : (
    <>
      <Navbar
        scrollToZen={() => {
          scrollToZen();
        }}
        aboutUs={false}
        handleSidebar={() => setIsSidebar(true)}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="tech" element={<TechEvents />} />
        <Route path="fun" element={<FunEvents />} />
        <Route path="workshop" element={<WorkshopEvents />} />
        {/* <Route path="comingsoon" element={<ComingSoon />} /> */}
        <Route path="user" element={<RegisterSuccess />} />
      </Routes>
    </>
  );
}

export default App;
