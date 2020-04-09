import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './index.scss';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
export default function Property(props){
	const [property, setProperty]=useState({});
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
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.property_id]);
  return (
    <div className="main-content">
      <h2>{property.address}<br/>{property.city+","+property.state+" "+property.zip}</h2>
      <img
        src={property.img}
        alt="Insert into Property Table to display"
      />
      <p style={{fontSize:"3rem"}}>
        Managed by{" "}
        <Link to={`/manager/${property.manager_id}`}> {manager.firstName+" "+manager.lastName}</Link>{" "}
      </p>
    </div>
  );
}
