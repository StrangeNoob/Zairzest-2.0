import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import FirebaseApp from "../src/FirebaseConfig";
import SignUp from "./views/SignUp/SignUp";
import RegisterUser from "./views/RegisterUser/RegisterUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="registerUser" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
