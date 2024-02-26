import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";

import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login"
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/about/About";

function App() {
  useEffect(() => {
    // Add any necessary cleanup for the useEffect hook here
    // For example, removing event listeners
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
