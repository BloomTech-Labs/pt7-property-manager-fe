import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from './index';

test('renders SignUp Form', () => {
});
test('renders Title', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Log in/i);
});
test('renders Email Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Email/i);
});
test('renders Password Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Password/i);
});
test('renders Submit Button', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Submit/i);
});
test('renders Cancel Button', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Cancel/i);
});
test('Click Submit', ()=>{
	const { getByText } = render(<SignUp />);
	const submitBtn = getByText(/Submit/i);
	fireEvent.click(submitBtn);
})
test('Click Cancel', ()=>{
	const { getByText } = render(<SignUp />);
	const cancelBtn = getByText(/Cancel/i);
	fireEvent.click(cancelBtn);
})

