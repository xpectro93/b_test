import './App.css';
import { Switch, NavLink, Route } from "react-router-dom";

import GradientText from "./components/gradientText/GradientText.js";
import TvContainer from "./components/tvContainer/TvContainer.js"
import ThreeD from './components/threeD/ThreeD.js';
function App() {
  return (
    <div className="App">
      <nav>
      <NavLink to="/" activeClassName="selected">
          Home
      </NavLink>
        <Link to='gradient'>
          Gradient
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

        <Route path="/3d">
          <ThreeD/>
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
