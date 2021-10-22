import React from "react";
import "./home.scss";
import logo from "../assets/agni.png";
import DefaultNav from "../components/DefaultNav";
import Features from "../components/Home/Features";
import Improvements from "../components/Home/Improvements";
import Team from "../components/Home/Team";
import Footer from "../components/Home/Footer";

export default function Home({ dark, dark_toggle, state }) {
  return (
    <div>
      <DefaultNav dark={dark} dark_toggle={dark_toggle} />

      <div id="home" className="hero">
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
        <img
          alt="none"
          className={`agniVibe ${dark ? "dark" : ""}`}
          src={logo}
        ></img>
      </div>

      <Features />

      <Improvements data={state.improvements} />

      <Team data={state.credits} />

      <Footer
        start={state.started}
        end={state.ends}
        donate={state.donate}
        groups={state.support_groups}
      />
    </div>
  );
}
