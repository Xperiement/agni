import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./mobilenav.scss";
import Mbutton from "./Nav/Mbutton";
import ThemeButton from "./Nav/ThemeButton";

export default function MobileNav({
  dark,
  dark_toggle,
  hide,
  showDevices,
  setShowDevices,
}) {
  const history = useHistory();
  const loc = useLocation();
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(loc.pathname);
  }, [loc]);

  const pushRoute = (item) => {
    history.replace(item);
  };
  return (
    <nav className={`mobile ${hide ? "closed" : ""}`}>
      <Mbutton
        action={() => pushRoute("/#home")}
        icon="home"
        enabled={route === "/"}
      />
      <Mbutton
        action={() => pushRoute("/downloads")}
        icon="download-cloud-2"
        enabled={route.startsWith("/downloads")}
      />

      <Mbutton
        action={() => pushRoute("/installation#iTop")}
        icon="article"
        enabled={route.startsWith("/installation")}
      />

      {route.startsWith("/downloads") && (
        <Mbutton
          action={() => setShowDevices(!showDevices)}
          icon="device"
          enabled={showDevices}
        />
      )}

      {route !== "/downloads" && (
        <ThemeButton enabled={dark} action={dark_toggle} />
      )}
    </nav>
  );
}
