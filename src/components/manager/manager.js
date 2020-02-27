import React, {useState, useEffect} from "react";
import axios from "axios";
import PropertyCard from "../properties/PropertyCard.js";

export default function Manager(props){
  const [manager, setManager] = useState({
    email: "fake@fake.com",
    phoneNumber: "1234567890",
    firstName: "Mister",
    lastName: "Rogers",
    role: "Manager",
    properties:[
      {property_id: 1, name: "The White House", manager_id: 1 },
         { property_id:5, name: "Tiny Home Down by the River", manager_id: 1}
    ]
  });
  useEffect(() => {
    axios
      .get(`https://property-manager-be.herokuapp.com/users/${props.match.params.manager_id}`)
      .then(res => {
        console.log(res.data.user);
        setManager(res.data.user);
      
        axios
          .get(`https://property-manager-be.herokuapp.com/manager/properties/${props.match.params.manager_id}`)
          .then(res => {
            console.log(res.data.properties);
            setManager({...manager, properties:res.data.properties});
          })
          .catch(err => {
            console.error(err);
          });
      
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return(
  
    <div className="main-content">
      <h2>Manager: {manager.firstName} {manager.lastName}</h2>
      <img src={manager.img} alt="Insert Image location into img column of Manager/User Table to display" />
      <p> Email: {manager.email}</p>
      <p> Phone: {manager.phoneNumber}</p>
      <div className="managerProperties">
      <h3>Properties Managed by {manager.firstName}:</h3>
          {manager.properties.map(property=>(
            <div key={property.id}>
              <PropertyCard property={property}/>
            </div>
          ))}
      </div>
    </div>
  
  
  )
}
