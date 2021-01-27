import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('check if the Best Reads text is visible', () => {
  render(
    <Router>
        <Home />
    </Router>
    );
    
  const linkElement = screen.getByText(/Best Reads/i);
  // screen.debug();
  expect(linkElement).toBeInTheDocument();
});
