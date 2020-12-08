import logo from './logo.svg';
import './App.css';
import { Switch, Link, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>
          HOME
        </Link>
      </nav>
        <Switch>

        </Switch>
    </div>
  );
}

export default App;
