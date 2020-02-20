import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
// import PrivateRoute from "../PrivateRoute.js";
import Notifications from "./notifications";
import AddProperty from "./add-property";
import AddRenter from "./add-renter";
import Applications from "./applications";
import Properties from "./properties";
import Settings from "./settings";
import WorkOrders from "./work-orders";
import UserNav from "./user-nav";
export default function UserPage() {

  return (
    <div className="dashboard main-content">
      <h2>User Page (Should be a Protected Route)</h2>
      <UserNav/>
      <div className="bodyDiv" id="notifications"><h3>Notifications</h3></div><hr/>
      <div className="bodyDiv" id="applications"><h3>Applications</h3></div><hr/>
      {/* <div className="bodyDiv" id="workOrders"><h3>Work Orders</h3></div> */}
      <div className="bodyDiv" id="properties"><h3>Properties</h3></div>
    </div>
  );
}
