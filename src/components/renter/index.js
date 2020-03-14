import React from "react";
// import PrivateRoute from "../PrivateRoute.js";
import {Collapse} from 'reactstrap';

import UserNav from "./user-nav";
export default function Renter(){

	const ids=['notifications', 'applications', 'workOrders', 'properties'];
	const toggle=(e)=>{
		//console.log(e.target.parentNode);
		//console.log(e.target.parentNode.id);
		//console.log(e.target.nextSibling.classList);
		ids.map(id=>{
			//console.log(id);
			//console.log(e.target.parentNode);
			if(id===e.target.parentNode.id){
				return e.target.nextSibling.classList.toggle('show');
			}
			return null;
		});
		//console.log(e.target.nextSibling.classList);

	}
  return(
    <div className="dashboard main-content">
      <h2>Renter Dashboard</h2>
      <UserNav/>
      <div id="notifications">
	 <h3 onClick={(e)=>toggle(e)}>Notifications</h3><Collapse className="bodyDiv show">
		<div>
	  <p>Notifications will go here once you have some!</p>
	  </div>
	  </Collapse>
	  </div>
	  <hr />
      <div id="applications">
	 <h3 onClick={(e)=>toggle(e)}>Applications</h3><Collapse className="bodyDiv show">
		<div>
	  <p>Applications will go here once  you've applied for a property</p>
	  </div>
	  </Collapse>
	  </div>
	  <hr />
	  {/*<div id="workOrders">
	 <h3 onClick={(e)=>toggle(e)}>Work Orders</h3><Collapse className="bodyDiv show">
		<div>
	  <p>Work Orders will go here once implemented, collapsible when clicking on heading!</p>
	  </div>
	  </Collapse>
	  </div>
	  <hr />*/}
      <div id="properties">
	 <h3 onClick={(e)=>toggle(e)}>Saved Properties</h3><Collapse className="bodyDiv show">
		<div>
	  <p>Saved Properties will go here after you find some you're interested in applying for.</p>
	  </div>
	  </Collapse>
	  </div>
	  <hr />
    </div>
  
  )}
