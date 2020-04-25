import React from 'react';
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