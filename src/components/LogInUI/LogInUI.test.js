import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LogInUI from './LogInUI';

describe('LogInUI Testing: UI render testing', () => {

  afterEach(cleanup);
  
  test('check if the Log-in button is present', () => {  
    const { getByText } =  render(
      <Router>
          <LogInUI />
      </Router>
      );  
    const logInButton = getByText('Log In');
    expect(logInButton).toBeInTheDocument();
  });

  test('check if the Sign up Link is present', () => {  
    const { getByText } =  render(
      <Router>
          <LogInUI />
      </Router>
      );  
    const signUpLink = getByText('Sign-up');
    expect(signUpLink).toBeInTheDocument();
  });


})


