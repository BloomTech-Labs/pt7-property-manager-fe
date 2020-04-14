import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './index.scss';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
export default function Property(props){
	const [property, setProperty]=useState({});
	const [units, setUnits]=useState([]);
	const [manager, setManager]=useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/properties/${props.match.params.property_id}`)
      .then(res => {
        //console.log(res.data.property);
        setProperty(res.data.property);
          
            axiosWithAuth()
              .get(
                `/users/${res.data.property.manager_id}`
              )
              .then(res => {
                //console.log(res.data.user);
			    setManager(res.data.user);
              })
              .catch(err => {
                console.error(err);
              });

			axiosWithAuth()
			  .get(
				  `/properties/${props.match.params.property_id}/units`
              )
              .then(res => {
				//console.log(res.data.units);
				setUnits(res.data.units);
              })
              .catch(err => {
                console.error(err);
              });
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.property_id]);
  return (
    <div className="propertyCard">
    <div className='propInfo contentSection'>
      <h2 className='propertyTitle'>{property.address}<br/>{property.city+", "+property.state+" "+property.zip}</h2>
      <p style={{fontSize:"3rem"}} className='managedBy'>
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
		{[...units].map(unit=>{
			if(unit.property_id == property.id){
			return(
		  <div class="my-5  w-100 mx-auto" style={{maxWidth:"1000px", minHeight:"300px", fontSize:"1.5rem"}} > 
				<hr/>
			<p key={unit.id}>Unit {unit.number} - Available {Date(unit.date_available)}</p>
				<div class="">
					<p key={unit.id+"Description"}>{unit.description}</p>
					<Link to={`/Properties/${props.match.params.property_id}/Unit/${unit.id}`}><button class="btn btn-primary mx-2 btn-lg">More Info</button></Link>
					<Link to={`/Properties/${props.match.params.property_id}/Unit/${unit.id}/Apply`}><button class="btn btn-success mx-2 btn-lg">Apply Now</button></Link>
			  </div> 
		  </div> 
		)}})}
	  </div>
	  
    </div>
    <div className='contentSection'>
      <img
        src={property.img}
        alt="Insert into Property Table to display"
        className='propertyImg'
      />      
    </div>
    <div className='contentSection units'>
      units will go here
    </div>

    </div>
  );
}
