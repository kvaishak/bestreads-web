import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpUI from '../components/SignUpUI/SignUpUI';
import LogInUI from '../components/LogInUI/LogInUI';
import Home from '../components/Home/Home';

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
