import React from "react";
import {Link} from 'react-router-dom';
export default function ManagerCard(props) {
  let { manager } = props;
  // console.log(manager);
  return (
    <div>
      <h3>
		  <Link to={`/manager/${manager.id}`}>{manager.firstName} {manager.lastName}</Link>
      </h3>
      <img src={manager.img} alt="Insert into Manager/User Table to display" />
      <p> Email: {manager.email}</p>
      <p> Phone: {manager.phoneNumber}</p>
    </div>
  );
}
