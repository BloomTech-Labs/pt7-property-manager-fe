import React, { useState } from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import './settings.scss';



function ManagerSettings(){
  const thedata ={
    firstName:`${sessionStorage.getItem("firstName")}`,
    lastName: `${sessionStorage.getItem("lastName")}`,
    phoneNumber:`${sessionStorage.getItem("phoneNumber")}`,
    // id: `${sessionStorage.getItem("userID")}`,
    // editing:false,
   }
  const [thename, setName] = useState(thedata);

  console.log("theName", thename)
  console.log("theId", thename.id)
  const handleChange = e => {
    setName({ ...thename, [e.target.name]: e.target.value});
  };
                 ///********************* *///
    const [toggle, setToggle] = useState({
      id: `${sessionStorage.getItem("userID")}`,
      editing:false,
    })
    const ChangeEdidMode = () =>{
   setToggle({ ...toggle, 
     
     editing:!toggle.editing,
   })
  };
  console.log('togle ID', toggle.id);
  console.log('toggle', toggle);
  
                 ///**********Function ************ *///
  const handleSubmit = e => {
    e.preventDefault();
   
    axiosWithAuth()
    .put(`/users/${toggle.id}`, thename)
    .then(res=>{
     console.log(res.data.user);
     console.log("the res", res) 	  
     })
    .catch(error => {
      console.log(error)
  });
  }
                 ///**********Function ************ *///
 const renderEditView =()=>{
   return(
 <div className="formBox">
      <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={thename.firstName} 
          />
          <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={thename.lastName} 
          />
          <input
          type="tel"
          name="phoneNumber"
          onChange={handleChange}
          value={thename.phoneNumber} 
          />
          <div className="buttomHolder">
          <button className='viewPropsBtn margin'onClick={handleChange,ChangeEdidMode}>OK</button>
          <button className='viewPropsBtn margin' onClick={ChangeEdidMode}>Cancel</button>
          </div>
    </div>
    )};
                 ///**********Function ************ *///
  const redenderDefaultView=()=>{
    return(
      <div>
      <div className="info">
      <h3 className="managerName">{thename.firstName}</h3>
      <h3 className="managerName">{thename.lastName}</h3>
      <h4 className="telNumber">{thename.phoneNumber}</h4>
      </div >
      <div className='buttonHolder'>
        <button className='viewPropsBtn' type="submit"onClick={handleSubmit}>
          Submit
        </button> 
        <button className='viewPropsBtn' onClick={ChangeEdidMode}>
          Edit
        </button>
      </div>
     
      </div>
    )
  } 
                 ///**********Render************ *///
  return(
    <div className='main-content'>
    <div className="cardHolder">
      <div className="managerCard"   >
        <div>
          {toggle.editing ? (renderEditView()):(redenderDefaultView())}
        </div>
      </div >
    </div>
    </div>
  )
}
export default ManagerSettings;

