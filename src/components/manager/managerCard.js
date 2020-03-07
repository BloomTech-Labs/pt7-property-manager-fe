import React from "react";
import {Link} from 'react-router-dom';
export default function ManagerCard(props) {
	let { manager } = props;
	// console.log(manager);
	return (
		<div className="managerCard">
			<h3 className="managerName">
				<Link to={`/manager/${manager.id}`}>{manager.firstName} {manager.lastName}</Link>
			</h3>
			<img src={manager.img===null?props.img:manager.img} className="profilePic" alt="Insert into Manager/User Table to display" />
			<p className="managerEmail"> Email: {manager.email}</p>
			<p className="telNumber"> Phone: {manager.phoneNumber}</p>
			<div className='info'>
				<div className='buttonHolder'>
					<Link to='/Manager/' className='viewPropsBtn'>View Properties</Link>
				</div>                   
			</div>
		</div>
	);
}
