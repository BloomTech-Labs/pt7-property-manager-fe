import React, { useState, useEffect } from "react";
import ManagerCard from "./managerCard";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import './manager.scss'

export default function Managers() {
  const [managers, setManagers]=useState([""]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://property-manager-be.herokuapp.com/users/")
      .then(res => {
        //console.log(res.data.users);
        setManagers(res.data.users);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const blankImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FNo_portrait_blanko.svg%2F480px-No_portrait_blanko.svg.png&f=1&nofb=1'
  return (
<div className="main-content">
	<h2>List of Managers</h2>
	<div className="cardHolder">
      {managers.map(manager => (
        manager.role==='Manager'?(
			<div key={manager.email}>
			  <ManagerCard manager={manager} img={manager.img===null? blankImg: manager.img} />
			</div>
		  ):null))}
    </div>
</div>
  );
}

