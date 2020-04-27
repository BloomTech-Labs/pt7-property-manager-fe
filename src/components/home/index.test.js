import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Home from './index';

test('renders homepage', () => {
});
test('renders Title', () => {
  const { getByText } = render(<Home />);
  getByText(/Get Started/i);
});
test('renders sections', () => {
  const { findAllByText } = render(<Home />);
  findAllByText(/contentSection/i);
});
test('Click Get Started Button', ()=>{
	const { getByText } = render(<Home />);
	const getStartedBtn = getByText(/Get Started/i);
	fireEvent.click(getStartedBtn);
})
test('Click Learn More Button', () => {
    const { getByText } = render( <Home /> );
    const learnMoreBtn = getByText(/Learn More/i);
    fireEvent.click(learnMoreBtn);
})
test('Click Submit Button', () => {
    const { getByText } = render( <Home /> );
    const submitBtn = getByText(/Submit/i);
    fireEvent.click(submitBtn);
})
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