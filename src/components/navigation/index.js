import React, { useState, useContext } from "react";
import "./nav.scss";
import UserContext from "../../contexts/userContext";
export default function Navigation() {
  const { user } = useContext(UserContext);
  let loggedIn = () => {
    if (localStorage.getItem("token")) {
      return (
        <a href="/logout">
          <nav-item>Logout</nav-item>
        </a>
      );
    } else {
      return (
        <nav-item>
          <a href="/login" >Login</a> | <a href="/signup">Signup</a>
        </nav-item>
      );
    }
  };
  return (
    <div className="navbar">
      <a href="/dashboard">
        <nav-item>Dashboard</nav-item>
      </a>
      <a href="/properties">
        <nav-item>Properties</nav-item>
      </a>
      <a href="/about">
        <nav-item>About</nav-item>
      </a>
      <a href="/contact">
        <nav-item>Contact</nav-item>
      </a>
      {loggedIn()}
    </div>
  );
}
