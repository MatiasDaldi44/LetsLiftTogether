import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;