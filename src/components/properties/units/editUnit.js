import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../../utils/axiosWithAuth.js';
import "./../addProperty.scss";
import {Button} from "reactstrap";
export default function EditUnit(props) {
	const [unit, setUnit]=useState({});
	useEffect(()=>{
		axiosWithAuth()
			.get(`/units/${props.match.params.unit_id}`)
			.then(res=>{
				console.log(res.data.unit);
				setUnit(res.data.unit);
				setUnit({date_available:res.data.unit.date_available.substring(0,10)});
			}).catch(err=>{
				console.error(err)
			});

	},[props.match.params.unit_id]);
	
	let postUnit=(e)=>{
        e.preventDefault();
        //console.log(e.target.parentNode.childNodes);
        let number=e.target.parentNode.childNodes[1].value;
        let dateAvailable=e.target.parentNode.childNodes[3].value;
        let homeType=e.target.parentNode.childNodes[5].childNodes[0].value;
        let fees=e.target.parentNode.childNodes[7].value;
        let sqft=e.target.parentNode.childNodes[9].value;
        let postUnit={number:number, date_available:dateAvailable, type:homeType, fees:fees, sqft:sqft, property_id:props.match.params.property_id};
		//axios
		axiosWithAuth()
			.put(`/units/${props.match.params.unit_id}`, postUnit)
			.then(res => {
				console.log(res.data);
				//props.history.push(`/properties/${res.data.prop.id}`); 
			})
			.catch(err => {
				console.error(err);
			});
    }
  return (
    <div className="main-content">
        <h2>Edit Unit</h2>
      <form className="addPropForm">
		  <label>Unit Number</label>
          <input type="text" required style={{marginBottom:"20px"}} value={unit.number} name="number" />
		  <label>Availability Date</label>
          <input type="date" style={{marginBottom:"20px"}} required value={unit.date_available} name="date_available" />
		  <label>Unit Type</label>
		  <div style={{background: "transparent", marginBottom:"20px", fontSize:"2.5rem", height:"65px", lineHeight:"1", width:"20%" }}>
			  <select style={{width:"100%"}} required value={unit.type} name="Building Type">
				<option value="">Select One</option>
				<option>Apartment</option>
				<option>Condo</option>
				<option>Single Family Home</option>
				<option>Duplex</option>
				<option>Mobile Home</option>
				<option>Parking Space</option>
			  </select>
		  </div>
		  <label>Fees</label>
          <input type="number" style={{marginBottom:"20px"}} step="0.01" min="0" value={unit.fees} required name="fees" />
		  <label>Square Footage</label>
          <input type="number" style={{marginBottom:"20px"}} min="0" value={unit.sqft} name="sqft" />
          <Button color="success" type="submit" onClick={(e)=>postUnit(e)}>Save Changes</Button>
      </form>
    </div>
  );
}

