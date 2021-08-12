import './App.css';
import Home from './components/home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
