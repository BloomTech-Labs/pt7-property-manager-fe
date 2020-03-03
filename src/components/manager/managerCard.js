import React from "react";
import los from "../../icons/los.jfif";

const ManagerCard = (props) => {
    return (
      // <div className="managerCard">
      //   <img src={this.props.profilePic} alt={this.props.managerName} className='profilePic'></img>
      //   <h3 className="managerName">{this.props.managerName}</h3>
      //   <h4 className="telNumber">{this.props.telNumber}</h4>
      //   <h4 className='managerEmail'>{this.props.managerEmail}</h4>
      // </div>
      <div className="managerCard">
        <img src={los} alt='los' className='profilePic'></img>
        <div className='info'>
          <h3 className="managerName">{props.managerName}</h3>
          <h4 className="telNumber">{props.phoneNumber}</h4>
          <h4 className='managerEmail'>{props.email}</h4> 
          <div className='buttonHolder'>
            <a className='viewPropsBtn' href='/Manager/:manager_id'>View Properties</a>
          </div>                   
        </div>
      </div>
    );    
};

export default ManagerCard;
