import React from "react";
import Sidebar from "../components/Downloads/Sidebar";
import Overview from "../components/Downloads/Overview";
import "./downloads.scss";

const data = [
  {
    name: "Redmi Note 5 Pro",
    code_name: "whyred",
    oem: "Xiaomi",
    enabled: true,
    resources: [
      {
        type: "kernel",
        title: "v6.9",
        size: "14.5MB",
        url: "",
        md5: "",
        changelogs: ["Added Z-Engine", "Improved thermal"],
      },
      {
        type: "firmware",
        title: "Super first cds",
        size: "420.69MB",
        url: "",
        md5: "",
        changelogs: ["Added Z-Engine", "Improved thermal"],
      },
    ],
  },
];

export default function Downloads() {
  return (
    <div className="downloads">
      <Sidebar devices={data} />
    </div>
  );
}
