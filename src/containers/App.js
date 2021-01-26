import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpUI from '../components/SignUpUI';
import LogInUI from '../components/LogInUI';
import Home from '../components/Home';

function App() {
  return (
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup"  component={SignUpUI} />
                <Route path="/login"  component={LogInUI} />
              </Switch>
            </Router>
  );
}

export default App;
