import React, {useState, useEffect} from "react";
import axios from "axios";
import './index.scss'
import {Link} from "react-router-dom";
export default function PropertyCard(props){
  let {property}=props;
  //console.log(property);
  const [units, setUnits]=useState([]);
  return(
	<div className='col-6 propertiesOwned'>
	  <h3>{property.address} in {property.city+", "+property.state}</h3>
	  <img src={property.img} style={{width:"75%"}} alt="Insert location into Property Table to display"/>
	</div>  
  )
}
