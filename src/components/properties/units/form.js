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
  const [apply, setApply]=useState({});
  const handleChange = e => {
    setApply({ ...apply, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
      e.preventDefault();
      
      axiosWithAuth()
      .post("https://property-manager-be.herokuapp.com/auth/register", apply)
        .then(res=>{ 
          console.log(res.data); 
          //console.log(res.data.token); 
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
         
          <label htmlFor='Adress'>Address</label>
           <input
             type="text"
             name="address"
             value={"address"}
             
             className="address" required
           />
          
        
           <div className='buttonHolder'>
          
           <button className='submitBtn' type="submit" >Submit</button>
         </div>
       </form>
     </div>
 
  );
}
