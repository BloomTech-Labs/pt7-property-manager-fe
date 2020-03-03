import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function PropertyCard(props){
  let {property}=props;
  //console.log(property);
  const [manager, setManager]=useState({id:property.manager_id});
  useEffect(() => {
    axios
      .get(`https://property-manager-be.herokuapp.com/users/${manager.id}`)
      .then(res => {
        console.log(res.data);
        setManager(res.data);
      })
      .catch(err => {
        console.error(err);
        });
  }, []);

  return(
    <div style={{minHeight:"30vh",margin:"20px"}}>
      <h3>{property.name}</h3>
      <img src={property.img} alt="Insert Image location into img column of Property Table to display"/>
    </div>  
  )
}
