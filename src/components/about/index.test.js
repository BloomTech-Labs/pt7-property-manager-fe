import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import About from './index.js';

test('renders Title 1', () => {
  const { getByText } = render(<Router><About /></Router>);
  getByText(/What is Property Manager?/i);
});
test('renders Title 2', () => {
  const { getByText } = render(<Router><About /></Router>);
  getByText(/Where Property Manager?/i);
});
test('renders Title 3', () => {
  const { getByText } = render(<Router><About /></Router>);
  getByText(/Why Property Manager?/i);
});
test('renders Title 4', () => {
  const { getByText } = render(<Router><About /></Router>);
  getByText(/How Property Manager?/i);
});


