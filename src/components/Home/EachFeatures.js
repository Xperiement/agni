import React from "react";

export default function EachFeatures({ ico, info1, info2 }) {
  return (
    <div className="card">
      <div className="ico">
        <i class={ico}></i>
      </div>
      <div className="info">
        {info1} <span>{info2}</span>
      </div>
    </div>
  );
}
