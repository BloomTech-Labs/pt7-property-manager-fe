import React, { useState, useEffect } from "react";
// import los from "../../icons/los.jfif";

const ManagerCard = (props) => {
  const managerId = useState(props)

  const logId = id => {
    console.log(id)
    sessionStorage.setItem('id', id)
  }

    return (
      <div className="managerCard">
        <img src={props.img} alt={props.firstName} className='profilePic'></img>
        <div className='info'>
          <h3 className="managerName">{props.firstName} {props.lastName}</h3>
          <h4 className="telNumber">{props.phoneNumber}</h4>
          <h4 className='managerEmail'>{props.email}</h4> 
          <div className='buttonHolder'>
            <a className='viewPropsBtn' href={`/manager/${props.id}`} onClick={() => logId(props.id)}>View Properties</a>
          </div>                   
        </div>
      </div>
    );    
};

export default ManagerCard;
