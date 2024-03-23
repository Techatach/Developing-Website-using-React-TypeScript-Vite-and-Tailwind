// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Ai from "./components/Ai";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
