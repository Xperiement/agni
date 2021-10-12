import React from "react";
import "./defaultnav.scss";
import Logo from "../assets/agni.png";
import { Link } from "react-router-dom";

export default function DefaultNav() {
  return (
    <nav className="default">
      <img className="navHome" src={Logo} alt="" />
      <Link to="/downloads">Downloads</Link>
      <div className="navButton">Installation</div>
      <div className="navButton">Support</div>
      <div className="navButton">About</div>
    </nav>
  );
}