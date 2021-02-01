import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider } from '../utils/auth/AuthContext';

import SignUp from './SignUp/SignUp';
import Login from './LogIn/LogIn';
import Profile from './Profile/Profile';

import Home from '../components/Home/Home';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from '../HOC/PrivateRoute';


function App() {
  return (
            <Router>
              <AuthProvider>
                <Switch>
                  <Route path="/" exact component={Home} />

                  <Route path="/signup"  component={SignUp} />
                  <Route path="/login"  component={Login} />

                  <PrivateRoute path="/profile" component={Profile} redirections="/login" /> 
                  <PrivateRoute path="/dashboard" component={Dashboard} redirections="/login" />
                  
                </Switch>
              </AuthProvider>
            </Router>
  );
}

export default App;
