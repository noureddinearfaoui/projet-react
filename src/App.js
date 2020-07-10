import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Menu from "./components/menu/Menu";

import SignIn from "./components/signin/Signin";
import SignUp from "./components/signup/Signup";
import Livres from "./components/livres/Livres";
import Users from "./components/users/Users";
import Profil from "./components/profil/Profil";
//import Livre from './components/livre/Livre'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  var logout = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Menu/:id"></Route>
          <Route path="/Profil">
            <Menu />
            <Profil />
          </Route>
          <Route path="/Livres">
            <Livres />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/logout">
            {logout()}
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
