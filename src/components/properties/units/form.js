import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './../index.scss';
import {axiosWithAuth} from "../../../utils/axiosWithAuth";
export default function ApplicationForm(props){
	const [property, setProperty]=useState({});
	const [unit, setUnit]=useState([]);
	const [manager, setManager]=useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/properties/${props.match.params.property_id}`)
      .then(res => {
        console.log(res.data.property);
        setProperty(res.data.property);
          
            axiosWithAuth()
              .get(
                `/users/${res.data.property.manager_id}`
              )
              .then(res => {
                console.log(res.data.user);
			    setManager(res.data.user);
              })
              .catch(err => {
                console.error(err);
              });

			axiosWithAuth()
			  .get(
				  `/units/${props.match.params.unit_id}`
			   )
              .then(res => {
                console.log(res.data.unit);
				setUnit(res.data.unit);
              })
              .catch(err => {
                console.error(err);
              });
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.unit_id]);
  return (
    <div className="main-content">
      <p style={{fontSize:"2rem"}}>
		{property.address}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.city}, {property.state} {property.zip}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.country}
      </p>
	  <div class="mb-5"> 
		<p key={unit.id}>Unit {unit.number} - Available {Date(unit.date_available)}</p>
	  </div>
	  
    </div>
  );
}
