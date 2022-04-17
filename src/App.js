import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";
import FirebaseApp from "../src/FirebaseConfig";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
