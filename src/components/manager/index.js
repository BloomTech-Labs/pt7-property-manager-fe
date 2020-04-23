import React, {useState, useContext, useEffect} from "react";
// import PrivateRoute from "../PrivateRoute.js";
import UserNav from "./user-nav";
import {Button, Collapse} from 'reactstrap';
import UnitCard from './UnitCard';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import Renter from "../renter/index.js";
import userContext from "../../contexts/userContext";
import Guest from "../renter/guest";
import {Link} from "react-router-dom";

export default function UserPage(props) {

	const {user}=useContext(userContext);
	const ids=['notifications', 'applications', 'workOrders', 'properties'];
	const [properties, setProperties] = useState([]);
	useEffect(() => {
		if(user.role==='Manager'){
			axiosWithAuth()
				.get(`/properties/manager/${sessionStorage.getItem('userID')}`)
				.then(res => {
					//console.log(res.data.properties);
					setProperties(res.data.properties);
				})
				.catch(err => {
					console.error(err);
				});
		}
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
			<h3>Notifications</h3>
			<Collapse className="bodyDiv show" >
			<div>
			<p>Notifications will go here once implemented, collapsible when clicking on heading!</p>
			</div>
			</Collapse>
			</div>
			<hr/>
			<div id="applications">
			<h3>Applications</h3>
			<Collapse className="bodyDiv show" >
			<div>
			<p>Applications will go here once implemented, collapsible when clicking on heading!</p>
			</div>
			</Collapse>
			</div>
			<hr/>
			<div id="workOrders">
					<h3>Work Orders</h3>
						<Collapse className="bodyDiv" >
							<div>
								<p>Work Orders will go here once implemented, collapsible when clicking on heading!</p>
							</div>
					</Collapse>
				</div>
					<hr/>*/}
			<div id="properties">
				<h3>Properties</h3>
				<div className="bodyDiv" >
					{properties.map(property=>(
						<div className="row" key={property.id}>
							<div className='col-6 propertiesOwned'>
							  <h4 style={{fontSize:"2rem"}}>{property.address} in {property.city+", "+property.state}</h4>
							  <img src={property.img} style={{width:"50%"}} alt="Insert location into Property Table to display"/>
							</div>  
							<div className='col-6'>
								<UnitCard property={property}/>
							</div>  
							<div className='col-12'>
								<Link to={`/Manager/edit-property/${property.id}`} style={{margin:'10px', width:'60%'}}><Button style={{fontSize:'2rem'}} color='secondary'>Edit Property Details</Button></Link>
								<hr/>
							</div>  
						</div>
					))}
					<Link to={`/Manager/add-property/`}><Button style={{marginTop:'10vh', fontSize:'2rem'}}color='success'>Add Property</Button></Link>
				</div>
			</div>
		</div>
	)
}else{
	return(
		<Guest/>
	)

}};
