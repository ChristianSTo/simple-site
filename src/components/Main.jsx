import React, { useState, useEffect, useRef } from "react";
import "../blocks/main.css";
import diverseGroup from "../assets/images/diverseGroup.avif";
import WhyOui from "./WhyOui";
import Features from "./Features";
import Join from "./Join";
function Main() {
  return (
    <>
      <section className="main space">
        <div className="main__text">
          <h1 className="main__heading">
            Investing for the next generation of{" "}
            <span className="main__span">
              dreamers, doers, and legacy builders.
            </span>
          </h1>
          <p className="main__subheading">
            Empowering the next generation to invest, build, and thrive.
          </p>
          <button className="main__button">
            What's Your Unique Investor Vibe?
          </button>
        </div>
        <img
          className="main__image"
          src={diverseGroup}
          alt="Diverse group of young people laughing together"
        ></img>
      </section>
      <WhyOui />
      <Features />
      <Join />
    </>
  );
}

export default Main;
