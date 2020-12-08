import './App.css';
import { Switch, Link, Route } from "react-router-dom";

import GradientText from "./components/gradientText/GradientText.js";

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
      </nav>
        <Switch>
        <Route path="/gradient">
          <GradientText/>
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
