import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './index.scss'

export default function PropertyCard(props){
  let {property}=props;
  //console.log(property);
  const [manager, setManager]=useState({id:property.manager_id});
  useEffect(() => {
	 axios
      .get(`https://property-manager-be.herokuapp.com/users/${manager.id}`)
	  .then(res => {
		 //console.log(res.data);
		setManager(res.data);
	  })
	  .catch(err => {
		console.error(err);
		});
  }, []);

  return(
    <div className='propertiesCard'>
      <div className='propertyInfo'>
        <h3 style={{fontSize:"3rem"}}>{property.address}</h3>
        <p style={{fontSize:"2rem"}}>Managed by <Link to={`/manager/${property.manager_id}`}> {property.firstName+" "+property.lastName}</Link> </p>      
      </div>
      <div className='imgHolder'>
        <img src={property.img} className='propImg' alt="Insert into Property Table to display"/>
      </div>
    </div>  
  )
}
