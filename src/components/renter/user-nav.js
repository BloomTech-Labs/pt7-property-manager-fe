import React,{useState, useEffect} from 'react';
import {
  // Button, 
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText} from "reactstrap";
export default function UserNav() {
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
   console.log(scrolled);
  return (
        <Navbar color="light" sticky={`${scrolled}`} light expand="sm">
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
            {/* <NavItem>
              <NavLink href="#workOrders">
                Work Orders
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#properties">Properties</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/Renter/settings">Settings</NavLink>
          </NavbarText>
        </Navbar>      
  )
}
