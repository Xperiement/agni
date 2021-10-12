import "./styles/app.scss";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/downloads">
          <Downloads />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
