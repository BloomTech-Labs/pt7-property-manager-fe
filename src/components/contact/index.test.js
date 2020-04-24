import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Contact from './index.js';

test('renders Full Name', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Full Name/i);
});
test('renders Email', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Email/i);
});
test('renders Phone Number', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Phone Number/i);
});
test('renders Subject', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Subject/i);
});
test('renders Brief Message', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Brief Message/i);
});
test('renders Submit Btn', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Submit/i);
});
test('renders Cancel Btn', () => {
  const { getByText } = render(<Router><Contact /></Router>);
  getByText(/Cancel/i);
});



