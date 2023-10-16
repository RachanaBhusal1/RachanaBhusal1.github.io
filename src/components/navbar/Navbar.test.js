import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';


test('renders Navbar', () => {
  render(<Navbar />);
  const header = screen.getByText(/Rachana Bhusal/i);
  const about = screen.getByText(/About/i);
  const contact = screen.getByText(/Contact/i);
  expect(header).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(contact).toBeInTheDocument();

});