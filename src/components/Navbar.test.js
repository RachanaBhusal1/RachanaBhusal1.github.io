import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';


test('renders Navbar', () => {
  render(<Navbar />);
  const header = screen.getByText(/Rachana Bhusal/i);
  const Project = screen.getByText(/Project/i);
  const about = screen.getByText(/about/i);
  const Contact = screen.getByText(/Contact/i);
  expect(header).toBeInTheDocument();
  expect(Project).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(Contact).toBeInTheDocument();
});