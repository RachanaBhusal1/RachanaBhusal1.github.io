import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
test('renders Navbar', () => {
  render(<Navbar />);
  const header = screen.getByText(/Cafe@Belco/i);
  const home= screen.getByText(/Home/i);
  const menu = screen.getByText(/Menu/i);
  const aboutus = screen.getByText(/AboutUs/i);
  const contact = screen.getByText(/ContactUs/i);
  expect(header).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(menu).toBeInTheDocument();
  expect(aboutus).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
});
