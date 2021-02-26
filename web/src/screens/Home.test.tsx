import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders hello text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello ElectronicX/i);
  expect(linkElement).toBeInTheDocument();
});
