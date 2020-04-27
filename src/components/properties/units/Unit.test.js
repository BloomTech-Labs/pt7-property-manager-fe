import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';
import Unit from './Unit.js';

const routeComponentPropsMock = {
	history: {},
	location: {},
	match: {params:{property_id:"1"}},

}
test('renders Title', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Managed By/i);
});
test('renders Title', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Apply Now/i);
});
test('renders Unit title', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Unit/i);
});
test('renders Lease Info', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Lease Info/i);
});
test('renders Property Info', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Property Info/i);
});
test('renders Nearby School Info', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Nearby School Info/i);
});
test('renders Available ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Available/i);
});
test('renders Structure ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Structure/i);
});
test('renders Lease Term ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Lease Term/i);
});
test('renders Rent', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Rent \$/i);
});
test('renders Security Deposit ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Security Deposit/i);
});
test('renders Fees ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Fees/i);
});
test('renders Parking ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Parking/i);
});
test('renders Cooling ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Cooling/i);
});
test('renders Heating ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Heating/i);
});
test('renders Pets ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Pets/i);
});
test('renders Laundry ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Laundry/i);
});
test('renders SqFt. ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/SqFt./i);
});
test('renders District ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/District/i);
});
test('renders Elementary ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Elementary/i);
});
test('renders Middle ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/Middle/i);
});
test('renders High ', () => {
  const { getByText } = render(<Router><Unit {...routeComponentPropsMock} /></Router>);
  getByText(/High/i);
});
