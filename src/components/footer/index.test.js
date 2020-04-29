import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from './index.js';

test('renders footer', () => {
});
test('renders Input', () => {
  const { getAllByPlaceholderText } = render(<Footer />);
  getAllByPlaceholderText(/Enter Your Email/i);
});
test('Click Submit Button', () => {
    const { getByText } = render( <Footer /> );
    const submitBtn = getByText(/Submit/i);
    fireEvent.click(submitBtn);
})
test('renders Contact Us link', () => {
  const { getByText } = render(<Footer />);
  getByText(/Contact Us/i);
});
test('renders FAQs link', () => {
  const { getByText } = render(<Footer />);
  getByText(/FAQs/i);
});
test('renders Meet The Team link', () => {
  const { getByText } = render(<Footer />);
  getByText(/Meet The Team/i);
});