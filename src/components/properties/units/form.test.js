import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './form';



test('renders Title', () => {
    const { getByText } = render(<Form />);
    getByText(/Application Form/i);
  });
  test('renders Title', () => {
    const { getByText } = render(<Form />);
    getByText(/First Name/i);
  });
  