import React from 'react';
import { render } from '@testing-library/react';
//import App from './App';
import TopNavBar from "./components/TopNavbar"
test('renders Keisha\'s Google Book Search link', () => {
  const { getByText } = render(<TopNavBar />);
  const linkElement = getByText(/Keisha's Google Book Search/i);
  expect(linkElement).toBeInTheDocument();
});


// test('renders Search link', () => {
//   const { getByText } = render(<TopNavBar />);
//   const linkElement = getByText(/Search/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Saved link', () => {
  const { getByText } = render(<TopNavBar />);
  const linkElement = getByText(/Saved/i);
  expect(linkElement).toBeInTheDocument();
});