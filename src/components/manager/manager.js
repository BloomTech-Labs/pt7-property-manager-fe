import React, {useState, useEffect} from "react";
import PropertyCard from "./PropertyCard.js";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "./index.scss";
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import './index.scss';

export default function Manager(props){
	const [manager, setManager] = useState({});
	const [properties, setProperties]=useState([]);
  useEffect(() => {
        axiosWithAuth()
          .get(`/properties/manager/${props.match.params.manager_id}`)
          .then(res => {
            //console.log(res.data);
			setManager(res.data.manager);
			setProperties(res.data.properties);
          })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.manager_id]);
  return(
  
    <div className="main-content">
      <h2>{manager.firstName} {manager.lastName} & Associates</h2>
      <img src={manager.img} alt="Insert into Manager/User Table to display" />
      <p> Email: {manager.email}</p>
      <p> Phone: {manager.phoneNumber}</p>
      <div className="managerProperties">
      <h3>Properties Managed by {manager.firstName+' '+manager.lastName}:</h3>
          {properties.map(property=>(
            <div key={property.id}>
              <PropertyCard property={property}/>
				<Button color="success"><Link to={`/properties/${property.id}`}>Apply Now</Link></Button>
				<hr/>
            </div>
          ))}
      </div>
    </div>
  
  
  )
}
