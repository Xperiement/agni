import React from "react";

export default function ThemeButton({ enabled, action }) {
  return (
    <div
      onClick={action}
      className={enabled ? "enabled" : ""}
      style={{ transform: "unset" }}
    >
      <i className={`ri-moon-line`}></i>
      <i className={`ri-moon-fill`} style={{ color: "var(--normal)" }}></i>
    </div>
  );
}
