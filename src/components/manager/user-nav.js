import React,{useState, useEffect} from 'react';
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
export default function UserNav(props) {
	const {toggle, isOpen, setIsOpen}=props;
   const [scrolled, setScrolled] = useState({});
   useEffect(() => {
     const handleScroll = _ => {
       if (window.pageYOffset > 1) {
         setScrolled("top");
       } 
     };
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
   //console.log(scrolled);
  return (
        <Navbar color="light" sticky={`${scrolled}`} light expand="sm">
          <Nav className="mr-auto" navbar>
	  {/*            <NavItem>
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
            </NavItem> */}
            <NavItem>
              <NavLink href="#properties">Properties</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="./Manager/add-property">
                    Add Property
                  </NavLink>
                </DropdownItem>
			{/*  <DropdownItem divider />
				  <DropdownItem>
                  <NavLink href="./Manager/add-renter">
                    Add Renter
                  </NavLink>
                </DropdownItem>*/}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
            <NavLink href="/Manager/settings">Settings</NavLink>
          </NavbarText>
        </Navbar>      
  )
}
