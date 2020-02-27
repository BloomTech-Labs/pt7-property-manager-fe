import React, { useState, useEffect } from "react";

export default function ManagerCard(props) {
  let { manager } = props;
  // console.log(manager);
  return (
    <div>
      <h3>
        {manager.firstName} {manager.lastName}
      </h3>
      <img src={manager.img} alt="Insert Image location into img column of Manager/User Table to display" />
      <p> Email: {manager.email}</p>
      <p> Phone: {manager.phoneNumber}</p>
    </div>
  );
}
