import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Property(props){
  const [property, setProperty]=useState({});
  useEffect(() => {
    axios
      .get(`https://property-manager-be.herokuapp.com/properties/${props.match.params.property_id}`)
      .then(res => {
        console.log(res.data.property);
        setProperty(res.data.property);
          
            axios
              .get(
                `https://property-manager-be.herokuapp.com/users/${property.manager_id}`
              )
              .then(res => {
                console.log(res.data);
                setProperty(...property, {manager:res.data});
              })
              .catch(err => {
                console.error(err);
              });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="main-content">
      <h2>{property.name}</h2>
      <img
        src={property.img}
        alt="Insert Image location into img column of Property Table to display"
      />
      <h3>
        Managed by{" "}
        <Link to={`/manager/${property.manager_id}`}> {property.manager_id}</Link>{" "}
      </h3>
    </div>
  );
}
