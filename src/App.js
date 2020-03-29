import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu'
import Livre from './components/Livre/Livre'
import SignIn from './components/signin/Signin'
import SignUp from './components/signup/Signup'

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
          <Route exact path="/Menu/:id">
          <Menu></Menu>
          </Route>
          <Route path="/Livre">
            <Livre />
          </Route>
          <Route exact path="/">
          <Menu></Menu>
          <SignIn />
          </Route>
          <Route exact path="/signup">
          <Menu></Menu>
          <SignUp />
          </Route>
        </Switch>
      
    </Router>
     
    </div>
  );
}

export default App;
