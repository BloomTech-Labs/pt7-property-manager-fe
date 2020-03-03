import React, {useState, useEffect} from 'react';
import axios from "axios";
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
export default function AddProperty() {
    const [property, setProperty]=useState({});

	let postProperty=(e)=>{
        e.preventDefault();
        //console.log(e.target.parentNode.childNodes);
        let name=e.target.parentNode.childNodes[0].value;
        let img=e.target.parentNode.childNodes[1].value;
        //console.log(name, img);
        setProperty({name:name, img:img, manager_id:sessionStorage.getItem('user id')});
        let postProperty={name:name, img:img, manager_id:sessionStorage.getItem('userID')};
		//console.log(sessionStorage);
		//console.log(postProperty);
		//axios
		axiosWithAuth()
			.post("/properties", postProperty)
          .then(res => {
            console.log(res.data.prop);
			setProperty(res.data.prop);
          }).catch(err => {
              console.error(err);
        // { property_id:2, name: "Slums", manager_id: 2 }]);
      });
    }
  return (
    <div className="main-content">
        <h2>Add Property</h2>
      <form>
          <input type="text" required placeholder="Property Name" name="name" />
          <input type="text" placeholder="Image Link" name="img" />
          <input type="submit" value="Add Property" onClick={(e)=>postProperty(e)}/>
      </form>
    </div>
  );
}
