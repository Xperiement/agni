import React from "react";
import "./defaultnav.scss";
import Logo from "../assets/agni.png";
import { HashLink } from "react-router-hash-link";
import ModeButton from "./ModeButton";

export default function DefaultNav({ dark, dark_toggle }) {
  return (
    <nav className="default">
      <HashLink smooth to="/#home">
        <img className="navHome" src={Logo} alt="" />
      </HashLink>

      {/* <img className="navHome" src={Logo} alt="" /> */}

      <HashLink smooth to="/downloads">
        Downloads
      </HashLink>
      <HashLink smooth to="/installation#iTop">
        Installation
      </HashLink>
      <HashLink smooth to="/#footer" className="support">
        Support
      </HashLink>
      <HashLink
        smooth
        to={{ pathname: "/", hash: "#about" }}
        // onSuspend={() => {
        //   const x = document.createElement("a");
        //   x.href = "#about";
        //   x.click();
        //   console.log("Fuck YOu");
        // }}
        className="about"
      >
        About
      </HashLink>

      <ModeButton enabled={dark} toggle={dark_toggle} />
    </nav>
  );
}
