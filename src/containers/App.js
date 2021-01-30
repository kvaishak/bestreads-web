import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './LogIn/LogIn';
import Home from '../components/Home/Home';
import { AuthProvider } from '../utils/auth/AuthContext';

function App() {
  return (
            <Router>
              <AuthProvider>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/signup"  component={SignUp} />
                  <Route path="/login"  component={Login} />
                </Switch>
              </AuthProvider>
            </Router>
  );
}

export default App;
