import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Navigation from './index';

test('renders Navigation', () => {
});
test('renders Dashboard Nav', () => {
  const { getByText } = render(<Router><Navigation /></Router>);
  getByText(/Dashboard/i);
});
test('Click Dashboard', ()=>{
	const { getByText } = render(<Router><Navigation /></Router>);
	const btn = getByText(/Dashboard/i);
	fireEvent.click(btn);
})
