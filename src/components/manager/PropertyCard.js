import React, {useState, useEffect} from "react";
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
    <div className='propertiesOwned'>
      <h3>{property.address} in {property.city+", "+property.state}</h3>
      <img src={property.img} alt="Insert location into Property Table to display"/>
    </div>  
  )
}


/**
 style = {
   {
     minHeight: "30vh",
     margin: "20px",
     display: "flex",
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'space-evenly'
   }
 }
 */