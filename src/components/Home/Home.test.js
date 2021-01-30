import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Testing: UI render testing', () => {

  afterEach(cleanup);
  
  test('check if the Sign up button is present and pointing to /signup', () => {  
    const { getByText } =  render(
      <Router>
          <Home />
      </Router>
      );  
    const signUpButton = getByText(/Sign-up/i);
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton.href).toContain('/signup');
  });

  test('check if the Login button is present and pointing to /login', () => {  
    const { getByText } =  render(
      <Router>
          <Home />
      </Router>
      );  
    const logInButton = getByText(/Log-in/i);
    expect(logInButton).toBeInTheDocument();
    expect(logInButton.href).toContain('/login');
  });

})


