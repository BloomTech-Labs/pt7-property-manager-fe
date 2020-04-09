import React from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
import "./addProperty.scss";
import {Button} from "reactstrap";
export default function AddProperty(props) {

	let postProperty=(e)=>{
        e.preventDefault();
        //console.log(e.target.parentNode.childNodes);
        let address=e.target.parentNode.childNodes[0].value;
        let city=e.target.parentNode.childNodes[1].value;
        let state=e.target.parentNode.childNodes[2].value;
        let zip=e.target.parentNode.childNodes[3].value;
        let img=e.target.parentNode.childNodes[4].value;
        //console.log(name, img);
        let postProperty={address:address, city:city, state:state, zip:zip, img:img, manager_id:sessionStorage.getItem('userID')};
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
          <input type="text" required placeholder="Street Address" name="address" />
          <input type="text" required placeholder="City" name="city" />
          <input type="text" required placeholder="State" name="state" />
          <input type="text" required placeholder="ZipCode" name="zip" />
          <input type="text" placeholder="Image Link" name="img" />
          <Button color="success" type="submit" onClick={(e)=>postProperty(e)}>Add Property</Button>
      </form>
    </div>
  );
}
