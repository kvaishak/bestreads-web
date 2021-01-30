import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpUI from './SignUpUI';

describe('SignUpUI Testing: UI render testing', () => {

  afterEach(cleanup);
  
  test('check if the Sign up button is present', () => {  
    const { getByText } =  render(
      <Router>
          <SignUpUI />
      </Router>
      );  
    const signUpButton = getByText('Sign up');
    expect(signUpButton).toBeInTheDocument();
  });

  test('check if the Log-in Link is present', () => {  
    const { getByText } =  render(
      <Router>
          <SignUpUI />
      </Router>
      );  
    const logInLink = getByText('Log-in');
    expect(logInLink).toBeInTheDocument();
  });


})


