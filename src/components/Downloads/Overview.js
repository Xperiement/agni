import React from "react";
import device from "../../assets/device.webp";
import logo from "../../assets/agni.webp";

export default function Overview({ model, code_name }) {
  return (
    <div className="overview">
      <img src={device} alt="" />
      <div className="device">
        <div className="section">
          <img className="logo" src={logo} alt="" />
          <div className="title">{model}</div>
          <div className="codeName">{code_name}</div>
        </div>
      </div>
    </div>
  );
}
