/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Sidebar from "../components/Downloads/Sidebar";
import Overview from "../components/Downloads/Overview";
import Tabs from "../components/Downloads/Tabs";
import "./downloads.scss";
import Card from "../components/Downloads/Card";
import axios from "axios";
import MDevices from "../components/Downloads/MDevices";

const initObj = {
  name: "No Device Found",
  code_name: "none",
  oem: "none",
  enabled: true,
  resources: [
    {
      type: "kernel",
      title: "Not Available",
      size: "N/A",
      url: "N/A",
      md5: "N/A",
      changelogs: ["Not Available"],
    },
  ],
};

const getInitial = () => JSON.parse(JSON.stringify([initObj]));

export const getEnabledOne = (name, data) => {
  const cloned = JSON.parse(JSON.stringify(data));
  const x = cloned.find(
    (item) => item.name === name || item.code_name === name
  );
  if (x) {
    x.enabled = true;
    return cloned;
  }
  return null;
};

export const getCurrentTab = (tabs) => {
  return tabs.find((item) => item.enabled);
};

export const getTabs = (device, type) => {
  let types = [];

  device.resources.forEach((item) => {
    if (!types.find((fitem) => fitem.name === item.type)) {
      types.push({ name: item.type, enabled: false });
    }
  });

  if (!type) {
    types[0].enabled = true;
  } else {
    const exists = types.find((item) => item.name === type);
    if (exists) {
      exists.enabled = true;
    }
  }

  return types;
};

export default function Downloads({ showDevices, setShowDevices }) {
  const history = useHistory();
  const { name, type } = useParams();
  const [devices, setDevices] = useState(() => getInitial());
  const [device, setDevice] = useState(() => initObj);
  const [tabs, setTabs] = useState(() => getTabs(device, type));
  const [tab, setTab] = useState(() => getCurrentTab(tabs));

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Xperiement/agni_data/main/data.json"
      )
      .then((res) => {
        if (res.status !== 200) return;

        const aName = name ? name.trim().toLowerCase() : undefined;
        const aType = type ? type.trim().toLowerCase() : undefined;

        const raw = res.data;

        if (aName) {
          const nRaw = raw.map((item) => {
            const aItemName = item.name.toLowerCase();
            const aItemCodeName = item.code_name.toLowerCase();
            item.enabled =
              aItemName === aName || aItemCodeName === aName ? true : false;
            return item;
          });
          const deviceFound = nRaw.find((item) => item.enabled);
          if (!deviceFound) {
            // setNotFound(true);
            history.push("/404");
            return;
          }
          setDevices(nRaw);
          setDevice(deviceFound);

          const aTabs = getTabs(deviceFound, aType);
          const aTab = aTabs.find((item) => item.enabled);

          if (aType && !aTab) {
            // setNotFound(true);
            history.push("/404");
            return;
          }

          setTabs(aTabs);
          setTab(aTab);
          return;
        }

        raw[0].enabled = true;
        setDevices(raw);
        setDevice(raw[0]);
        const aTabs = getTabs(raw[0], raw[0].resources[0].type);
        setTabs(aTabs);
        setTab(aTabs[0]);
      });
  }, []);

  return (
    <div className="downloads">
      <Sidebar
        devices={devices}
        setDevices={setDevices}
        setDevice={setDevice}
        setTab={setTab}
        setTabs={setTabs}
        history={history}
      />

      <Overview model={device.name} code_name={device.code_name} />

      <div className="topHeader">
        <div className="title">
          {device.name} <span>{device.code_name}</span>
        </div>
        <Tabs
          device={device}
          tabs={tabs}
          setTabs={setTabs}
          setTab={setTab}
          history={history}
        />
      </div>

      {device.resources.map((item, id) => {
        if (item.type === tab?.name) {
          return <Card key={id} data={item} />;
        }
        return null;
      })}

      <MDevices
        showDevices={showDevices}
        setShowDevices={setShowDevices}
        devices={devices}
        setDevices={setDevices}
        setDevice={setDevice}
        setTab={setTab}
        setTabs={setTabs}
      />
    </div>
  );
}
