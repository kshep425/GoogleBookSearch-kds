import React from 'react';
import { render } from '@testing-library/react';
import BookSearchHeader from "./index"

test('renders Keisha\'s Google Book Search link', () => {
  const { getByText } = render(<BookSearchHeader />);
  const linkElement = getByText(/\(React\) Google Book Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Saved link', () => {
  const { getByText } = render(<BookSearchHeader />);
  const linkElement = getByText(/Search for and save books of interest/i);
  expect(linkElement).toBeInTheDocument();
});