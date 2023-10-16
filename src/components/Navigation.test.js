import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';


test('renders Navigation', () => {
  render(<Navigation />);
  const header = screen.getByText(/Rachana Bhusal/i);
  const AboutMe = screen.getByText(/AboutMe/i);
  const Contact = screen.getByText(/Contact/i);
  const Projects = screen.getByText(/Projects/i);
  expect(header).toBeInTheDocument();
  expect(AboutMe).toBeInTheDocument();
  expect(Contact).toBeInTheDocument();
  expect(Projects).toBeInTheDocument();
});
