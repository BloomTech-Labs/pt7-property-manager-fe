import React, { useState, useEffect } from "react";
import ManagerCard from "./managerCard";
import {axiosWithAuth} from "../../utils/axiosWithAuth";

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
  return (
    <div className="main-content">
      <h2>List of Managers</h2>
      {managers.map(manager => (
        <div key={manager.email}>
          <ManagerCard manager={manager} />
        </div>
      ))}
    </div>
  );
}
