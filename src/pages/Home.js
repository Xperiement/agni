import React from "react";
import "./home.scss";
import logo from "../assets/agni.png";
import DefaultNav from "../components/DefaultNav";
import Features from "../components/Home/Features";
import Improvements from "../components/Home/Improvements";

export default function Home() {
  return (
    <div>
      <DefaultNav />

      <div className="hero">
        <div className="twoSide">
          <div className="logoHolder">
            <img alt="none" className="agni" src={logo}></img>
          </div>
          <div className="infoHolder">
            <p className="heroHead">
              A<span>G</span>Ni Kernel
            </p>

            <p className="heroSubHead">
              Blazing <span>Fast</span> & <span>Effective</span>
            </p>

            <button className="heroButton">
              <i className="ri-download-cloud-2-line"></i>
              Download <span>NOW</span>
            </button>
          </div>
        </div>
        <img alt="none" className="agniVibe" src={logo}></img>
      </div>

      <Features />

      <Improvements />
    </div>
  );
}
