import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Button} from 'reactstrap';
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
  }, [manager.id]);

  return(
    <div style={{minHeight:"30vh",margin:"20px", display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
      <h3>{property.name}</h3>
      <img src={property.img} alt="Insert location into Property Table to display"/>
	  <Link to={`/Manager/edit-property/${property.id}`} style={{margin:'10px', width:'60%'}}><Button style={{fontSize:'2rem'}} color='secondary'>Edit Property Details</Button></Link>
    </div>  
  )
}
