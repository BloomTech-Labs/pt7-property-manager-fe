import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ".././units/Forms.scss";

import {axiosWithAuth} from "../../../utils/axiosWithAuth";
import DropUp from "../../dropup/DropUp";
import {Button} from "reactstrap";
export default function ApplicationForm(props){
	const [property, setProperty]=useState({});
	const [unit, setUnit]=useState([]);
	const [manager, setManager]=useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/properties/${props.match.params.property_id}`)
      .then(res => {
        console.log(res.data.property);
        setProperty(res.data.property);
          
            axiosWithAuth()
              .get(
                `/users/${res.data.property.manager_id}`
              )
              .then(res => {
                console.log(res.data.user);
			    setManager(res.data.user);
              })
              .catch(err => {
                console.error(err);
              });

			axiosWithAuth()
			  .get(
				  `/units/${props.match.params.unit_id}`
			   )
              .then(res => {
                console.log(res.data.unit);
				setUnit(res.data.unit);
              })
              .catch(err => {
                console.error(err);
              });
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.unit_id]);

  //*********************FORM***********************/
  const [apply, setApply]=useState({
    first_name:`${sessionStorage.getItem('firstName')}`,
    last_name: `${sessionStorage.getItem('lastName')}`,
    marital_status: "",
    email: `${sessionStorage.getItem('email')}`,
    move_in_date: "",
    lease_terms: "",
    date_of_birth: "",
    app_address: "",
    app_city: "",
    app_state: "",
    app_zip: "",
    app_country: "",
    government_id: "",
    social_security: "",
    document: `${sessionStorage.getItem('document')}`, 
    status: "pending",
    unit_id: `${props.match.params.property_id}`

  });

  console.log('Apply', apply);
  
  const[preValues, setPreValues]=useState({
    imageHash:Date.now()
  })
  const handleChange = e => {
    setApply({ ...apply, [e.target.name]: e.target.value });

    };
    const handleSubmit = e => {
      e.preventDefault();
      
      axiosWithAuth()
      .post("/applications", apply)
        .then(res=>{ 
          console.log(res); 
         // console.log(res.data.token); 
        
        }).catch(err => {
          console.error(err);
  });
      // document.getElementById('applyForm').reset();
    }
    const isLoggedIn = sessionStorage.getItem("token");
  console.log('isLoggedIn', isLoggedIn);

   const swapExt = apply.document.replace(/\.[^.]+$/, '.jpeg'); 
   
   
   

  return (
    <div className="main-content-Form">
      <p style={{fontSize:"2rem"}}>
		{property.address}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.city}, {property.state} {property.zip}
      </p>
      <p style={{fontSize:"2rem"}}>
		{property.country}
      </p>
	  <div class="mb-5"> 
		<p key={unit.id}>Unit {unit.number} - Available {Date(unit.date_available)}</p>
	  </div>
	  {/* FORM START HERE  */}

    

       <h2>Application Form</h2>
       <form className="addPropForms" autoComplete="new-password">
         
          <label htmlFor='FirstName'>First Name</label>
           <input
             type="text"
             name="first_name"
             value={apply.first_name}
             style={{marginBottom:"20px"}}
             onChange={handleChange}
             required
           />
            <label htmlFor='LastName'>Last Name</label>
            <input
             type="text"
             name="last_name"
             value={apply.last_name}
             style={{marginBottom:"20px"}}
             onChange={handleChange}
             required
           />
            <label htmlFor='email'>Email</label>
            <input
             type="email"
             name="email"
             value={apply.email}
             style={{marginBottom:"20px"}}
             onChange={handleChange}
             required
           />
           
            <label style={{marginBottom:"20px"}} htmlFor='marital_status'>Marital Status</label>
            <div style={{background: "transparent", marginBottom:"20px", fontSize:"2.5rem", height:"65px", lineHeight:"1", width:"20%" }}>
               
            <select
            type="checkbox"
            name="marital_status"
            value={apply.marital_status}
            style={{marginBottom:"20px"}}
            onChange={handleChange}
            required
            >
            <option value="">Please choose one option</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            </select>
            </div>
           
            {/* move_in_date */}
            <label>Move in Date</label>
          <input 
          type="date"
          name="move_in_date"
          value={apply.move_in_date} 
          style={{marginBottom:"20px"}} 
          onChange={handleChange}
          required 
           />
            {/* lease_terms: 12 */}
            
            <label  style={{marginBottom:"20px"}} 
            htmlFor='leas_term'>Lease Term</label>
            <div style={{background: "transparent", marginBottom:"20px", fontSize:"2.5rem", height:"65px", lineHeight:"1", width:"20%" }}>
            <select 
            type="checkbox"
            name="lease_terms"
            value={apply.lease_terms}
            onChange={handleChange}
             required
             style={{marginBottom:"20px"}}
            >
            <option value="">Please choose one option</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
            </select>
            </div>
            
            {/* date_of_birth */}
            <label>Date of Birth</label>
          <input 
          type="date"
          name="date_of_birth" 
          value={apply.date_of_birth} 
          onChange={handleChange}
          style={{marginBottom:"20px"}} 
          required 
           />
            {/* app_address */}
            <label htmlFor='address'>Address</label>
            <input
            type="address"
            name="app_address"
            value={apply.app_address}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
            required
            style={{marginBottom:"20px"}}
            />
            {/*app_city */}
            <label htmlFor='city'>City</label>
            <input
            type="address"
            name="app_city"
            value={apply.app_city}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
             required
             style={{marginBottom:"20px"}}
            />
            {/*app_state */}
            <label htmlFor='state'>State</label>
            <input
            type="address"
            name="app_state"
            value={apply.app_state}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
             required
             style={{marginBottom:"20px"}}
            />
            {/* app_zip */}
            <label htmlFor='zipcode'>zipcode</label>
            <input
            type="address"
            name="app_zip"
            value={apply.app_zip}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
             required
             style={{marginBottom:"20px"}}
            />
            {/* app_country */}
            <label htmlFor='country'>Country</label>
            <input
            type="address"
            name="app_country"
            value={apply.app_country}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
             required
             style={{marginBottom:"20px"}}
            />
            {/* government_id */}
            <label htmlFor='goverment_id'>Goverment Id</label>
            <input
            type="password"
            name="government_id"
            value={apply.government_id}
            onChange={handleChange}
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
            required
            style={{marginBottom:"20px"}}
            />
            {/* social_security */}
            <label htmlFor='social_security'>Social Security</label>
            <input
            type="password"
            name="social_security"
            value={apply.social_security}
            onChange={handleChange}
            
            // placeholder={"Example@domain.com"}
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "Example@domain.com")}
           required
          //  style={{marginBottom:"20px"}}
            />
            {/* document  */}
            <div style={{marginBottom:"20px"}}>
            <DropUp />
            </div>
            <div>
            <img src={swapExt} alt="" style={{width:"250px"}}/>
            </div>
              <button onClick={() =>sessionStorage.setItem('document', "")} >Delete</button>
          
            
          
           <Button color="success" type="submit"onClick={handleSubmit} >Submit</Button>
      
       </form>
     </div>
 
  );
}
