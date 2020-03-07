import React from "react";
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
export default function ManagerCard(props) {
	let { manager } = props;
	// console.log(manager);
	let number=()=>{
		if(manager.phoneNumber){
			return (<p className="telNumber"> Phone: {manager.phoneNumber}</p>);
		}
	}
	return (
		<div className="managerCard">
			<img src={manager.img===null?props.img:manager.img} className="profilePic" alt="Insert into Manager/User Table to display" />
			<div className='info'>
				<h3 className="managerName">
					<Link to={`/manager/${manager.id}`}>{manager.firstName} {manager.lastName}</Link>
				</h3>
				<p className="managerEmail"> Email: {manager.email}</p>
				{number()}
				<Link to={`/Manager/${manager.id}`} className='viewPropsBtn'>
					<Button color='success' className='btn btn-lg buttonHolder'>
						View Properties
					</Button>                   
				</Link>
			</div>
		</div>
	);
}
