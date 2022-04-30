import { render, screen } from '@testing-library/react';
import App from './App';

test('metamask is installed', () => {
  render(<App />);
  const linkElement = screen.getByText(/metamask/i);
  expect(linkElement).toBeInTheDocument();
});
