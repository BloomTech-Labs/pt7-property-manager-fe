import React, {useState, useContext, useEffect} from "react";
// import PrivateRoute from "../PrivateRoute.js";
import UserNav from "./user-nav";
import {Button, Collapse} from 'reactstrap';
import PropertyCard from './PropertyCard';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Renter from "../renter/index.js";
import userContext from "../../contexts/userContext";
import Guest from "../renter/guest";
import {Link} from "react-router-dom";

export default function UserPage(props) {

	const {user}=useContext(userContext);
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
if(user.role==='Renter'){
	return(
		<Renter/>
	)

}else if(user.role==='Manager'){
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
			<Link to={`/Manager/edit-property/${property.id}`} style={{margin:'10px', width:'60%'}}><Button style={{fontSize:'2rem'}} color='secondary'>Edit Property Details</Button></Link>
			<hr/>
			</div>
		))}
		</div>
		<Link to={`/Manager/add-property/`}><Button style={{marginTop:'10vh', fontSize:'2rem'}}color='success'>Add Property</Button></Link>
		</Collapse>
		</div>
		</div>
	)
}else{
	return(
		<Guest/>
	)

}};
