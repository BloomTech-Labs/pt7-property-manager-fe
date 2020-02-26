import React, {useState, useEffect} from "react";
import ManagerCard from "./managerCard";

export default function Managers(){
  const [managers, setManagers]=useState([]);

  return(
  
    <div className="main-content">
      <h2>List of Managers Goes Here.</h2>
      {managers.map((manager)=>(
      <ManagerCard manager={manager}/>
      ))}
    </div>
  
  
  )};
