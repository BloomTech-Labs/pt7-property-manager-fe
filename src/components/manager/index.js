import React, {useState} from "react";
// import PrivateRoute from "../PrivateRoute.js";
import UserNav from "./user-nav";
import {Collapse} from 'reactstrap';

export default function UserPage() {
	const ids=['notifications', 'applications', 'workOrders', 'properties'];
	const toggle=(e)=>{
		//console.log(e.target.parentNode);
		//console.log(e.target.parentNode.id);
		console.log(e.target.nextSibling.classList);
		ids.map(id=>{
			//console.log(id);
			//console.log(e.target.parentNode);
			if(id==e.target.parentNode.id){
				e.target.nextSibling.classList.toggle('show');
			}
		});
		console.log(e.target.nextSibling.classList);

	}
	return (
		<div className="dashboard main-content">
			<h2>User Page (Should be a Protected Route)</h2>
			<UserNav/> 
			<div id="notifications">
				<h3 onClick={(e)=>toggle(e)}>Notifications</h3>
					<Collapse className="bodyDiv" >
						<div>
							<p>Notifications will go here once implemented, collapsible when clicking on heading!</p>
						</div>
				</Collapse>
			</div>
			<hr/>
			<div id="applications">
				<h3 onClick={(e)=>toggle(e)}>Applications</h3>
					<Collapse className="bodyDiv" >
						<div>
							<p>Applications will go here once implemented, collapsible when clicking on heading!</p>
						</div>
				</Collapse>
			</div>
			<hr/>
			{/*<div id="workOrders">
				<h3 onClick={(e)=>toggle(e)}>Work Orders</h3>
					<Collapse className="bodyDiv" >
						<div>
							<p>Work Orders will go here once implemented, collapsible when clicking on heading!</p>
						</div>
				</Collapse>
			</div>
				<hr/>*/}
			<div id="properties">
				<h3 onClick={(e)=>toggle(e)}>Properties</h3>
					<Collapse className="bodyDiv" >
						<div>
							<p>Properties will go here once implemented, collapsible when clicking on heading!</p>
						</div>
				</Collapse>
			</div>
		</div>
	)
};
