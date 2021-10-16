import "./styles/app.scss";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

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
          <Home dark={dark} dark_toggle={switchTheme} />
        </Route>
        <Route exact path="/downloads/:name?/:type?">
          <Downloads />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
