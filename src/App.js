import "./styles/app.scss";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import Installation from "./pages/Installation";
import axios from "axios";
import NotFound from "./components/Downloads/NotFound";
import MobileNav from "./components/MobileNav";

function App() {
  const { scrollDirection } = useScrollDirection();
  const [hide, setHide] = useState(false);
  const [showDevices, setShowDevices] = useState(false);
  const [dark, setDark] = useState(false);
  const [state, setState] = useState(() => ({
    started: 1970,
    ends: 2070,
    improvements: [],
    credits: [],
    support_groups: [],
    donate: [],
  }));

  useEffect(() => {
    const local_dark = localStorage.getItem("dark");
    if (!local_dark || local_dark === "false") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "");
    } else {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Xperiement/agni_data/main/base.json"
      )
      .then((res) => {
        if (res.status === 200) setState(res.data);
      });
  }, []);

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setHide(true);
    } else if (scrollDirection === "UP") {
      setHide(false);
    }
  }, [scrollDirection]);

  const switchTheme = () => {
    if (dark) {
      setDark(false);
      localStorage.setItem("dark", "false");
      document.documentElement.setAttribute("data-theme", "");
    } else {
      setDark(true);
      localStorage.setItem("dark", "true");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home dark={dark} dark_toggle={switchTheme} state={state} />
        </Route>
        <Route exact path="/installation">
          <Installation dark={dark} dark_toggle={switchTheme} state={state} />
        </Route>
        <Route exact path="/downloads/:name?/:type?">
          <Downloads
            dark={dark}
            dark_toggle={switchTheme}
            showDevices={showDevices}
            setShowDevices={setShowDevices}
          />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
      </Switch>
      <MobileNav
        dark={dark}
        dark_toggle={switchTheme}
        hide={hide}
        setShowDevices={setShowDevices}
        showDevices={showDevices}
      />
    </div>
  );
}

export default App;
