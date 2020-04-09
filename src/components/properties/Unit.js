import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './index.scss';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
export default function Unit(props){
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
      <h2>{property.name}</h2>
      <img
        src={property.img}
        alt="Insert into Property Table to display"
      />
      <p style={{fontSize:"3rem"}}>
        Managed by{" "}
        <Link to={`/manager/${property.manager_id}`}> {manager.firstName+" "+manager.lastName}</Link>{" "}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.address}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.city}, {property.state} {property.zip}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.country}
      </p>
	  <div> 
		<p key={unit.id}>Unit {unit.number} - Available {Date(unit.date_available)}</p>
		<p key={unit.id+"Description"}>{unit.description}</p>
	  </div>
	  
    </div>
  );
}
