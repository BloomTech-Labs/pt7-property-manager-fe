import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Properties from './index.js';

test('renders Title', () => {
  const { getByText } = render(<Router><Properties /></Router>);
  getByText(/Properties/i);
});

