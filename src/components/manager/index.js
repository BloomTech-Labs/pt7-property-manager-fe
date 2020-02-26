import React, {useState} from "react";
// import PrivateRoute from "../PrivateRoute.js";

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
