import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Home from './index.js';

test('renders First Home Page Caption', () => {
  const { getByText } = render(<Router><Home /></Router>);
  getByText(/Find your new home with Property Manager/i);
});
test('renders Second Home Page Caption', () => {
  const { getByText } = render(<Router><Home /></Router>);
  getByText(/Property Manager aims to reduce communication friction between landlord and tenant./i);
});
test('Click Learn More', ()=>{
	const { getByText } = render(<Router><Home /></Router>);
	const btn = getByText(/Learn More/i);
	fireEvent.click(btn);
})
test('Click Get Started', ()=>{
	const { getByText } = render(<Router><Home /></Router>);
	const btn = getByText(/Get Started/i);
	fireEvent.click(btn);
})
test('Click Sign up', ()=>{
	const { getAllByText } = render(<Router><Home /></Router>);
	const btn = getAllByText(/Sign up/i).slice(-1)[0];
	fireEvent.click(btn);
})

