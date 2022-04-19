import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import FirebaseApp from "../src/FirebaseConfig";
import SignUp from "./views/SignUp/SignUp";
import RegisterUser from "./views/RegisterUser/RegisterUser";
import Landing from './views/Landing';
import TechEvents from './views/Events/TechEvents';
import FunEvents from './views/Events/FunEvents';
import WorkshopEvents from './views/Events/WorkshopEvents';
import ComingSoon from './views/ComingSoon';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="tech" element={<TechEvents />} />
        <Route path="fun" element={<FunEvents />} />
        <Route path="workshop" element={<WorkshopEvents />} />
        <Route path="comingsoon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
