import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it("should render the text 'Ghatak's shopping list'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ghatak's shopping list/i);
  expect(linkElement).toBeInTheDocument();
});
