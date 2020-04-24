import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Property from './Property.js';

const routeComponentPropsMock = {
	history: {},
	location: {},
	match: {params:{property_id:"1"}},

}
test('renders Title', () => {
  const { getByText } = render(<Router><Property {...routeComponentPropsMock} /></Router>);
  getByText(/Managed By/i);
});
