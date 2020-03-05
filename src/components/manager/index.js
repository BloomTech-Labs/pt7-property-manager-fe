import React, {useState, useEffect} from "react";
// import PrivateRoute from "../PrivateRoute.js";
import UserNav from "./user-nav";
import {Button, Collapse} from 'reactstrap';
import PropertyCard from './PropertyCard';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {Link} from "react-router-dom";

export default function UserPage(props) {
	const ids=['notifications', 'applications', 'workOrders', 'properties'];
	const toggle=(e)=>{
		//console.log(e.target.parentNode);
		//console.log(e.target.parentNode.id);
		//console.log(e.target.nextSibling.classList);
		ids.map(id=>{
			//console.log(id);
			//console.log(e.target.parentNode);
			if(id==e.target.parentNode.id){
				e.target.nextSibling.classList.toggle('show');
			}
		});
		//console.log(e.target.nextSibling.classList);

	}

	const [properties, setProperties] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get(`/properties/manager/${sessionStorage.getItem('userID')}`)
			.then(res => {
				//console.log(res.data.properties);
				setProperties(res.data.properties);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<div className="dashboard main-content">
		<h2>Manager Dashboard</h2>
		<UserNav/> 
		{/*<div id="notifications">
		<h3 onClick={(e)=>toggle(e)}>Notifications</h3>
		<Collapse className="bodyDiv show" >
		<div>
		<p>Notifications will go here once implemented, collapsible when clicking on heading!</p>
		</div>
		</Collapse>
		</div>
		<hr/>
		<div id="applications">
		<h3 onClick={(e)=>toggle(e)}>Applications</h3>
		<Collapse className="bodyDiv show" >
		<div>
		<p>Applications will go here once implemented, collapsible when clicking on heading!</p>
		</div>
		</Collapse>
		</div>
		<hr/>
		<div id="workOrders">
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
		<Collapse className="bodyDiv show" >
		<div>
		{properties.map(property=>(
			<div key={property.id}>
			<PropertyCard property={property}/>
			<hr/>
			</div>
		))}
		</div>
		</Collapse>
		</div>
		</div>
	)
};
