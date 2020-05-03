import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'

import SignIn from './components/signin/Signin'
import SignUp from './components/signup/Signup'
import Livres from './components/livres/Livres'
import Users from './components/users/Users'
import Profil from './components/profil/Profil'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

function App() {
  var logout = ()=>{

    localStorage.clear();
  }
  
  return (
    <div className="App">
     
       <Router>
        
     
        

        <Switch>
          <Route exact path="/Menu/:id">
          <Menu></Menu>
          </Route>
          <Route path="/Profil">
          
          <Profil />
          </Route>
          <Route path="/Livres">
          
          <Livres />
          </Route>
          <Route path="/Users">
          
          <Users />
          </Route>
          <Route exact path="/">
          <Menu></Menu>
          <SignIn />
          
         
          </Route>
          <Route exact path="/signup">
          <Menu></Menu>
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
