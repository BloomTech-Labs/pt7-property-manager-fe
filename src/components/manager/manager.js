import React, {useState, useEffect} from "react";
import PropertyCard from "./PropertyCard.js";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "./index.scss";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import './index.scss';
import los from "../../icons/los.jfif";
import './manager.scss'

export default function Manager(props){
	const [manager, setManager] = useState({});
	const [properties, setProperties]=useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get(`/properties/manager/${props.match.params.manager_id}`)
			.then(res => {
				//console.log(res.data);
				setManager(res.data.manager);
				setProperties(res.data.properties);
			})
			.catch(err => {
				console.error(err);
			});
	}, [props.match.params.manager_id]);
  const blankImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FNo_portrait_blanko.svg%2F480px-No_portrait_blanko.svg.png&f=1&nofb=1'
	return(

<div className="main-content">
	<h2 className="managerName">{manager.firstName} {manager.lastName} & Associates</h2>
	<div className="cardHolder">
		<div className="managerCard">
			<img src={manager.img===null?blankImg:manager.img} className='profilePic' alt="Insert into Manager/User Table to display" />
			<div className="info">
				<p className="managerEmail"> Email: {manager.email}</p>
				<p className="telNumber"> Phone: {manager.phoneNumber}</p>
			</div>
		</div>
	</div>
	<div className="managerProperties">
		{properties.map(property=>(
			<div key={property.id}>
				<PropertyCard property={property}/>
				<Button color="success"><Link to={`/properties/${property.id}`}>Apply Now</Link></Button>
				<hr/>
			</div>
		))}
	</div>
</div>
	)
}
