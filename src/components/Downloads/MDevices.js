import React from "react";
import { useHistory } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { getTabs } from "../../pages/Downloads";

export default function MDevices({
  showDevices,
  setShowDevices,
  devices,
  setDevices,
  setDevice,
  setTabs,
  setTab,
}) {
  const history = useHistory();
  const transition = useTransition(showDevices, {
    from: {
      transform: "translateY(100%)",
    },
    enter: {
      transform: "translateY(0%)",
    },
    leave: {
      transform: "translateY(100%)",
    },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div className="mDevices" style={style}>
            <div className="head">Devices</div>
            <div className="list">
              {devices.map((item, id) => (
                <div
                  className={`item ${item.enabled ? "enabled" : ""}`}
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

                    setShowDevices(false);
                  }}
                >
                  <i className="ri-smartphone-line"></i>
                  <div>
                    <div className="model">{item.name}</div>
                    <div className="code">{item.code_name}</div>
                  </div>
                </div>
              ))}
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
}
