import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Managers from './all.js';

test('renders Title', () => {
  const { getByText } = render(<Router><Managers/></Router>);
  getByText(/Managers/i);
});


