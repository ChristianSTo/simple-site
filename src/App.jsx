import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Features from "./components/Features";
import OurStory from "./components/OurStory";
import Blogs from "./components/Blogs";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
