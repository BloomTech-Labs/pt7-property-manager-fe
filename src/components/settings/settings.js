import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import DeleteModal from "./DeleteModal";
import "./settings.scss";

function ManagerSettings(props) {
  const thedata = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    img: "",
    password: ""

  };
  const [thename, setName] = useState(thedata);
   //******************************************/
   
   //*************************************** */
  //console.log("theName", thename);
  //console.log("theId", thename.id);
  const handleChange = e => {
    setName({ ...thename, [e.target.name]: e.target.value });
  };
  ///********************* *///
  const [toggle, setToggle] = useState({
    id: `${sessionStorage.getItem("userID")}`,
    editing: false,
    status: ""
  });
  const ChangeEdidMode = () => {
    setToggle({
      ...toggle,

      editing: !toggle.editing
    });
  };
  //console.log("togle ID", toggle.id);
  //console.log("toggle", toggle);
  useEffect(()=>{
  axiosWithAuth()
  .get(`/users/${toggle.id}`)
  .then(res=>{
    //console.log("from the GET",res.data.user)
    setName(res.data.user)
  })
  .catch(err => {
    console.error(err);
  })},[toggle.id])

  ///**********Function  edit request ************ *///
  const handleSubmit = e => {
    e.preventDefault(props);

    axiosWithAuth()
      .put(`/users/${toggle.id}`, thename)
      .then(res => {
        //console.log(res.data.user);
        //console.log("the res", res);

        setToggle({
          ...toggle,
          status: res.status
        })
        
       })
      .catch(error => {
        //console.log(error);
      });
      
      props.history.push(`/dashboard`); 
     };

    ///**************MODAL***************** *///
    
   ///**********Function render edit form ************ *///
  const renderEditView = (props) => {
    return (
      <div className="formBox">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={thename.firstName}
        />
        <label>LastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={thename.lastName}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          onChange={handleChange}
          value={thename.phoneNumber}
        />
        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={thename.email}
        />
         <label>New Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={thename.password}
        />
        <label>Avatar</label>
         <input
          type="img"
          name="img"
          onChange={handleChange}
          value={thename.img}
        />
        <div className="buttomHolder">
          <button className="cancelBtn" type="submit" onClick={(handleSubmit) }>
            Submit
          </button>
          <button className="cancelBtn margin" onClick={ChangeEdidMode}>
            Cancel
          </button>
        
        </div>
      </div>
    );
  };
  ///**********Function settings card ************ *///
  const redenderDefaultView = (prop) => {
    return (
       <div>
      <div className="managerCard">
      <img src={thename.img} alt={thename.firstName} className='profilePic'></img>
      <div className='info'>
        <h3 className="managerName">{thename.firstName} {thename.lastName}</h3>
        <h4 className="telNumber">{thename.phoneNumber}</h4>
        <h4 className='managerEmail'>{thename.email}</h4> 
         <div className="buttonHolder">
         
          <button className="viewPropsBtn" onClick={ChangeEdidMode}>
            Edit
          </button>
          
        </div>
      </div>
    </div>
       
      </div>
    );
  };
  ///**********Render************ *///
  return (
    <div className="main-content">
      <div className="cardHolder">
        <div >
          <div>{toggle.editing ? renderEditView() : redenderDefaultView()}</div>
         
        </div>
      </div>
      </div>
  );

//********************************************* */

  
    
 
  
}
export default ManagerSettings;
