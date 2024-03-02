import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";

import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/about/About"

function App() {
  useEffect(() => {
    
  }, []);

  return (
    <div className="container-fluide">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
