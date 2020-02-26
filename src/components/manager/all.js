import React, { useState, useEffect } from "react";
import ManagerCard from "./managerCard";
import axios from "axios";

export default function Managers() {
  const [managers, setManagers] = useState([
    {
      email: "fake@fake.com",
      phoneNumber: "1234567890",
      firstName: "Mister",
      lastName: "Rogers",
      role: "Manager"
    },
    {
      email: "fake5@fake.com",
      phoneNumber: "1345678901",
      firstName: "Ice",
      lastName: "Tee",
      role: "Manager"
    }
  ]);
  useEffect(() => {
    axios
      .get("https://property-manager-be.herokuapp.com/users")
      .then(res => {
        console.log(res.data.users);
        setManagers(res.data.users);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <div className="main-content">
      <h2>List of Managers</h2>
      {[...managers].map(manager => (
        <div key={manager.email}>
          <ManagerCard manager={manager} />
        </div>
      ))}
    </div>
  );
}
