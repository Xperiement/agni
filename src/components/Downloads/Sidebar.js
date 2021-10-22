import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/agni.png";
import { getTabs } from "../../pages/Downloads";

export default function Sidebar({
  devices,
  setDevices,
  setDevice,
  history,
  setTabs,
  setTab,
}) {
  return (
    <div className="sidebar">
      <div className="head">
        <HashLink smooth to="/#home">
          <img src={logo} alt=""></img>
        </HashLink>
        <div>Downloads</div>
      </div>

      <div className="subHead">Devices</div>

      <div className="list">
        {devices.map((item, id) => (
          <div
            key={id}
            onClick={() => {
              setDevices(() => {
                return devices.map((fitem) => {
                  fitem.enabled = item.name === fitem.name;
                  return fitem;
                });
              });
              setDevice(item);

              const sTabs = getTabs(item, undefined);
              const sTab = sTabs[0];

              setTabs(sTabs);
              setTab(sTab);

              history.replace(
                `/downloads/${item.code_name}/${sTab?.name || ""}`
              );
            }}
            className={`card ${item.enabled ? "enabled" : ""}`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
