import React from "react";
import "./modeButton.scss";

export default function ModeButton({ toggle, enabled }) {
  return (
    <div
      onClick={() => toggle()}
      className={`modeBtn ${enabled ? "enabled" : ""}`}
    >
      <i className={`ri-sun-fill sun ${enabled ? "enabled" : ""}`} />
      <i className={`ri-moon-fill moon ${enabled ? "enabled" : ""}`} />
    </div>
  );
}
