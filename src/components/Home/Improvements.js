import React from "react";

const data = [
  {
    title: "General",
    data: [
      "Built with GCC 10.2 on Ubuntu 20.04 x64 AMD Ryzen 5 lenovo system.",
      "Enhanced compiler optimizations with device and target flags, build improvements, etc.",
      "Removed a ton of debug and logging to improve performance .",
      "ARM64 enhanced performance and battery patches.",
      "CVE security patches, linux kernel upstream and CAF kernel merges.",
    ],
  },
  {
    title: "CPU & GPU",
    data: [
      "EAS CPU Scheduling with default optimised schedutil governor.",
      "Many EAS CPU Governors available - schedutil, pwrutilx, blu_schedutil.",
      "2.2 / 2.45 GHz CPU OC options (2.45GHz experimental).",
      "40mV undervolted (CPU & GPU) to reduce heat and improve stability and battery life.",
      "GPU OC for sdm636/sdm660 is not possible, it is hardware locked.",
    ],
  },
  {
    title: "Network",
    data: [
      "Wifi driver options  based on latest sources of Android 9(Pie), Android 10(Q) and Android 11(R).",
      "Ton of wifi driver's debugging code disabled & tweak their functioning.",
      "Implemented Wireguard VPN support.",
      "Enhanced TCP methods - reno, cubic, veno, westwood, CDG, bbr(default).",
      "Auto enabled 2.4/5 GHz Wi-Fi channel bonding to increase throughput.",
    ],
  },
  {
    title: "I / O",
    data: [
      "Several I/O control tweaks, added schedulers zen, bfq, cfq, row, deadline, noop, depression, fifo, anxiety.",
      "noatime, nodiratime filesystem optimisations on all mounted filesystems.",
      "lz4/zstd/lzo zram available.",
      "Auto kernel fs FileSync on screen off and auto sync on panic & reboot to avoid data loss/corruption.",
      "Disabled I/O CRC check for more performance.",
    ],
  },
  {
    title: "Screen",
    data: [
      "sRGB,  KCAL, lineage livedisplay support .",
      "Backlight dimmer for lower minimum brightness .",
      "double tap to wake (dt2w) support for all known roms.",
    ],
  },
  {
    title: "Sound",
    data: [
      "modify wired headphone processing for increased fidelity.",
      "modify speaker processing  for clarity.",
      "Implemented flar2 sound control.",
    ],
  },
  {
    title: "Battery",
    data: [
      "USB Fast Charge 900mA max.",
      "Boeffla Wakelock blockers.",
      "Fast charging with maximum 2300mA (whyred, tulip with micro usb).",
      "Fast charging with maximum 2700mA (jasmine_sprout, lavender, wayne with type-c usb).",
      "18 Watts Safe charging with temperature control 43C (sdm660).",
      "18 Watts on curtana & 33 Watts on others - Safe charging with temperature control 40C (miatoll).",
    ],
  },
];

export default function Improvements() {
  return (
    <section className="improvements">
      <div className="head">Improvements</div>
      <div className="list">
        {data.map((item) => (
          <div className="card">
            <div className="head">{item.title}</div>
            <ul>
              {item.data.map((fitem) => (
                <li>{fitem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
