import React from "react";

export default function Mbutton({ icon, enabled, action }) {
  return (
    <div
      onClick={enabled && icon !== "device" ? null : action}
      className={enabled ? "enabled" : ""}
    >
      <i className={`ri-${icon}-line`}></i>
      <i className={`ri-${icon}-fill`}></i>
    </div>
  );
}
