import React from "react";
import EachFeatures from "./EachFeatures";

export default function Features() {
  return (
    <section className="features">
      <div className="head">Features</div>
      <div className="list">
        <EachFeatures
          ico="ri-battery-2-charge-fill green-txt"
          info1="Long lasting"
          info2="battery"
        />

        <EachFeatures
          ico="ri-temp-cold-line indigo-txt"
          info1="Keeps device"
          info2="cool"
        />

        <EachFeatures
          ico="ri-flashlight-line red-txt"
          info1="Snappy"
          info2="experience"
        />

        <EachFeatures
          ico="ri-refresh-fill deep-red-txt"
          info1="Always"
          info2="updated"
        />

        <EachFeatures
          ico="ri-headphone-line blue-txt"
          info1="Audiophile"
          info2="friendly"
        />

        <EachFeatures
          ico="ri-fire-fill red-txt"
          info1="Good gaming"
          info2="performance"
        />
      </div>
    </section>
  );
}
