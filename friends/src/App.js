import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { NavBar } from './components/NavBar';
import { Account } from './components/Account'
import { Login } from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
      <NavBar />
      </div>

      <Switch>
        <PrivateRoute path="/protected" component={Account} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
