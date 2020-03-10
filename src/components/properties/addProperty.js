import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
import "./addProperty.scss";
import {Button} from "reactstrap";
export default function AddProperty(props) {

	let postProperty=(e)=>{
        e.preventDefault();
        //console.log(e.target.parentNode.childNodes);
        let name=e.target.parentNode.childNodes[0].value;
        let img=e.target.parentNode.childNodes[1].value;
        //console.log(name, img);
        let postProperty={name:name, img:img, manager_id:sessionStorage.getItem('userID')};
		//console.log(sessionStorage);
		//console.log(postProperty);
		//axios
		axiosWithAuth()
			.post("/properties", postProperty)
          .then(res => {
            //console.log(res.data.prop);
			props.history.push(`/properties/${res.data.prop.id}`); 
          }).catch(err => {
              console.error(err);
        // { property_id:2, name: "Slums", manager_id: 2 }]);
      });
    }
  return (
    <div className="main-content">
        <h2>Add Property</h2>
      <form className="addPropForm">
          <input type="text" required placeholder="Property Name" name="name" />
          <input type="text" placeholder="Image Link" name="img" />
          <Button color="success" type="submit" onClick={(e)=>postProperty(e)}>Add Property</Button>
      </form>
    </div>
  );
}
