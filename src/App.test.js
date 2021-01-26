import { render, screen } from '@testing-library/react';
import App from './containers/App';

test('check if the Best Reads text is visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Best Reads/i);
  expect(linkElement).toBeInTheDocument();
});
