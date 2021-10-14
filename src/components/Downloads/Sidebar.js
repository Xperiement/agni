import React from "react";
import logo from "../../assets/agni.png";

export default function Sidebar({ devices }) {
  return (
    <div className="sidebar">
      <div className="head">
        <img src={logo} alt=""></img>
        <div>Downloads</div>
      </div>

      <div className="subHead">Devices</div>

      <div className="list">
        {devices.map((item) => (
          <div className={`card ${item.enabled ? "enabled" : ""}`}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
