import { Route, Routes, Navigate } from "react-router-dom";
import useHashScroll from "./hooks/useHashScroll";
import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Features from "./components/Features";
import Community from "./components/Community";
import OurStory from "./components/OurStory";
import Blogs from "./components/Blogs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Chat from "./components/Chat";
function App() {
  useHashScroll();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
      <Chat />
      <Footer />
    </>
  );
}

export default App;
