import './App.css';
import { Switch, Link, Route } from "react-router-dom";

import GradientText from "./components/gradientText/GradientText.js";
import TvContainer from "./components/tvContainer/TvContainer.js"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>
          HOME
        </Link>
        <Link to='gradient'>
          GRADIENT
        </Link>
        <Link to="tv-container">
          TV Container
        </Link>
        <Link to="3d">
          3D
        </Link>
      </nav>
        <Switch>
        <Route path="/gradient">
          <GradientText/>
        </Route>

        

        <Route path="/tv-container">
          <TvContainer/>
        </Route>

        <Route path="/" >
        <div>
          Yo this is home
        </div>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
