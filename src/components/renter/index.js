import React from "react";
// import PrivateRoute from "../PrivateRoute.js";

import UserNav from "./user-nav";
export default function Renter(){

  return(
    <div className="dashboard main-content">
      <h2>Renter's Dashboard Will Be Here</h2>
      <UserNav/>
      <div className="bodyDiv" id="notifications"><h3>Notifications</h3></div><hr />
      <div className="bodyDiv" id="applications"><h3>Applications</h3></div><hr />
      {/* <div className="bodyDiv" id="workOrders"><h3>Work Orders</h3></div> */}
      <div className="bodyDiv" id="properties"><h3>Saved Properties</h3></div>
    </div>
  
  )}
