import React from "react";
import "./defaultnav.scss";
import Logo from "../assets/agni.png";
import { Link } from "react-router-dom";
import ModeButton from "./ModeButton";

export default function DefaultNav({ dark, dark_toggle }) {
  return (
    <nav className="default">
      <img className="navHome" src={Logo} alt="" />
      <Link to="/downloads">Downloads</Link>
      <div className="navButton">Installation</div>
      <div className="navButton">Support</div>
      <div className="navButton">About</div>

      <ModeButton enabled={dark} toggle={dark_toggle} />
    </nav>
  );
}
