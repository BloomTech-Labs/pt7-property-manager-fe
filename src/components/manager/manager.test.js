import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Manager from './manager.js';

const routeComponentPropsMock = {
	history: {},
	location: {},
	match: {params:{manager_id:"1"}},

}
test('renders Title', () => {
  const { getByText } = render(<Router><Manager {...routeComponentPropsMock} /></Router>);
  getByText(/& Associates/i);
});

test('renders Header', () => {
  const { getByText } = render(<Router><Manager {...routeComponentPropsMock} /></Router>);
  getByText(/Properties Managed by/i);
});




