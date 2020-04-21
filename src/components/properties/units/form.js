import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './../index.scss';
import {axiosWithAuth} from "../../../utils/axiosWithAuth";
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
    lease_terms: 12,
    date_of_birth: "",
    app_address: "",
    app_city: "",
    app_state: "",
    app_zip: "",
    app_country: "",
    government_id: "",
    social_security: "",
    document: "", 
    status: "pending",

  });

  console.log('Apply', apply);
  
  const[preValues, setPreValues]=useState(
    localStorage.getItem('first_name') || ''
  )
  const handleChange = e => {
    setApply({ ...apply, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
      e.preventDefault();
      
      axiosWithAuth()
      .post("https://property-manager-be.herokuapp.com/application", apply)
        .then(res=>{ 
          console.log(res.data.user); 
         // console.log(res.data.token); 
        
        })
      document.getElementById('applyForm').reset();
    }
  return (
    <div className="main-content">
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

    

       <h1>Application Form</h1>
       <form id='applyForm' className='contactForm'autoComplete="new-password">
         
          <label htmlFor='Adress'>First Name</label>
           <input
             type="text"
             name="first_name"
             value={apply.first_name}
             
             className="First_Name" required
           />
            <label htmlFor='Adress'>Last Name</label>
            <input
             type="text"
             name="last_name"
             value={apply.last_name}
             
             className="Last_name" required
           />
            <div className="search_categories">
            <div className="select">
            <select
            type="checkbox"
            name="marital_status"
            value={apply.marital_status}
            onChange={handleChange}
            className="inputField_checkbox" required
            >
            <option value="">Please choose one option</option>
            <option value="Renter">Single</option>
            <option value="Manager">Married</option>
            </select>
            </div>
            </div>
            {/* move_in_date */}

            {/* lease_terms: 12 */}
            <div className="search_categories">
            <div className="select">
            <select
            type="checkbox"
            name="lease_terms"
            value={apply.lease_terms}
            onChange={handleChange}
            className="inputField_checkbox" required
            >
            <option value="">Please choose one option</option>
            <option value="Renter">6 months</option>
            <option value="Manager">12 months</option>
            </select>
            </div>
            </div>
            {/* date_of_birth */}
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
            className="app_address" required
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
            className="app_city" required
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
            className="app_state" required
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
            className="app_zip" required
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
            className="app_country" required
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
            className="goverment_id" required
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
            className="goverment_id" required
            />
            {/* document  */}

            
          
        
           <div className='buttonHolder'>
          
           <button className='submitBtn' type="submit" >Submit</button>
         </div>
       </form>
     </div>
 
  );
}
