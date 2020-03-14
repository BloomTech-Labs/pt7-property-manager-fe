import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
import "./editProperty.scss";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
export default function EditProperty(props) {
	const [property, setProperty]=useState({name:"", img:""});
	useEffect(()=>{
		axiosWithAuth()
			.get(`/properties/${props.match.params.propertyId}`)
			.then(res=>{
				//console.log(res.data.property);
				setProperty(res.data.property);
			}).catch(err=>{
				console.error(err)
			});

	},[props.match.params.propertyId]);
	const onChange=(e)=>{
		e.preventDefault();
		//console.log(e.target.value);
		if(e.target.name==='name'){
			setProperty({name:e.target.value});
		}else if(e.target.name==='img'){
			setProperty({img:e.target.value});
		}
	}
	const deleteProperty=()=>{
		axiosWithAuth()
			.delete(`/properties/${props.match.params.propertyId}`)
			.then(res=>{
				console.log(res.data);
				props.history.push(`/dashboard`); 
		}).catch(err=>{
			console.error(err);
		});
	}
	const putProperty=(e)=>{
		e.preventDefault();
		//console.log(e.target.parentNode.childNodes);
		let name=e.target.parentNode.childNodes[0].value;
		let img=e.target.parentNode.childNodes[1].value;
		//console.log(name, img);
		let putProperty={name:name, img:img, manager_id:sessionStorage.getItem('userID')};
		//console.log(sessionStorage);
		//console.log(putProperty);
		axiosWithAuth()
			.put(`/properties/${props.match.params.propertyId}`, putProperty)
			.then(res => {
				//console.log(res.data);
				//setProperty(res.data.prop);
				props.history.push(`/properties/${props.match.params.propertyId}`); 
			}).catch(err => {
				console.error(err);
			});
	}
	return (
		<div className="main-content">
			<h2>Edit Property</h2>
			<form className="editPropForm">
				<input type="text" required onChange={onChange}
					placeholder="Property Name" value={property.name} name="name" />
				<input type="text" onChange={onChange}
					placeholder="Image Link" value={property.img} name="img" />
				<Button color="success" type="submit" onClick={(e)=>putProperty(e)}>Save Changes</Button>
				<Link to="/dashboard"><Button color="secondary" type="reset">Cancel</Button></Link>
			<Button outline color="danger"
				onClick={deleteProperty}> Delete Property</Button>
			</form>
		</div>
	);
}
