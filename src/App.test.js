import { render, screen } from '@testing-library/react';
import App from './App';

test('check if the Sign in text is visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});
