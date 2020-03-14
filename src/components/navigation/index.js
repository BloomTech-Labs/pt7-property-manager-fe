import React from "react";
import "./nav.scss";
import {Link} from 'react-router-dom';
export default function Navigation() {
  let loggedIn = () => {
    if (sessionStorage.getItem("token")) {
      return (
        <Link to="/logout">
          <nav-item>Logout</nav-item>
        </Link>
      );
    } else {
      return (
        <nav-item>
          <Link to="/login" >Login</Link> | <Link to="/signup">Signup</Link>
        </nav-item>
      );
    }
  };
  let notManager = () => {
    if (sessionStorage.getItem("role")!=='Manager') {
      return (
        <Link to="/properties">
          <nav-item>Properties</nav-item>
        </Link>
      );
    } 
  };
  return (
    <div className="navbar">
      <Link to="/dashboard">
        <nav-item>Dashboard</nav-item>
      </Link>
		{notManager()}
      <Link to="/about">
        <nav-item>About</nav-item>
      </Link>
	  {/**<Link to="/contact">
        <nav-item>Contact</nav-item>
      </Link>**/}
      {loggedIn()}
    </div>
  );
}
