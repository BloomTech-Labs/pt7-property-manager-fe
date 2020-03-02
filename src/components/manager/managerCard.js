import React from "react";

class ManagerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      // <div className="managerCard">
      //   <img src={this.props.profilePic} alt={this.props.managerName} className='profilePic'></img>
      //   <h3 className="managerName">{this.props.managerName}</h3>
      //   <h4 className="telNumber">{this.props.telNumber}</h4>
      //   <h4 className='managerEmail'>{this.props.managerEmail}</h4>
      // </div>
      <div className="managerCard">
        {/* <img src={this.props.profilePic} alt={this.props.managerName} className='profilePic'></img> */}
        <h3 className="managerName">Carlos</h3>
        <h4 className="telNumber">1234567890</h4>
        <h4 className='managerEmail'>los@gmail.com</h4>
      </div>
    );    
  }

};

export default ManagerCard;
