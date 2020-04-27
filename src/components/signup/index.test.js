import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from './index';

test('renders SignUp Form', () => {
});
test('renders Title', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Create an Account/i);
});
test('renders First Name Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/First Name/i);
});
test('renders Last Name Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Last Name/i);
});
test('renders Email Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Email/i);
});
test('renders Password Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Password/i);
});
test('renders Phone Number Label', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Phone Number/i);
});
test('renders Dropdown Default', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Please choose one option/i);
});
test('renders Label of Dropdown', () => {
  const { getByText } = render(<SignUp />);
  getByText(/Renter or a Manager/i);
});
test('renders Renter option of Dropdown', () => {
  const { getAllByText } = render(<SignUp />);
  getAllByText(/Renter/i);
});
test('renders Manager option of Dropdown', () => {
  const { getAllByText } = render(<SignUp />);
  getAllByText(/Manager/i);
  
  const { getByText } = render(<SignUp />);
  getByText(/^Renter$/i);
});
test('renders Manager option of Dropdown', () => {
  const { getByText } = render(<SignUp />);
  getByText(/^Manager$/i);
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
