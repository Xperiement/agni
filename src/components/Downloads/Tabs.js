import React from "react";

export default function Tabs({ device, tabs, setTabs, setTab, history }) {
  return (
    <div className="tabs">
      {tabs.map((item, id) => (
        <div
          key={id}
          className={item.enabled === true ? "enabled" : ""}
          onClick={() => {
            const nTabs = tabs.map((fitem) => {
              fitem.enabled = fitem.name === item.name;
              return fitem;
            });
            setTabs(nTabs);
            setTab(item);

            history.replace(
              `/downloads/${device.code_name}/${item?.name || ""}`
            );
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
