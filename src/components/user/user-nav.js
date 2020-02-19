import React from 'react';
import {
  // Button, 
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText} from "reactstrap";

export default function UserNav() {
  return (
     <div className="user-nav">
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#notifications">
                Notifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#applications">
                Applications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#workOrders">
                Work Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#properties">Properties</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="./add-property">
                    Add Property
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="./add-renter">
                    Add Renter
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <NavLink href="/dashboard/settings">Settings</NavLink>
          </NavbarText>
        </Navbar>
      </div>
      
  )
}
