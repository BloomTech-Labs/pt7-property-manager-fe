/*!
=========================================================
* Property manager  Signup React - v1.0
=========================================================
* Product Page:https://github.com/Lambda-School-Labs/pt7-property-manager-fe
* Licensed under MIT (https://github.com/Lambda-School-Labs/pt7-property-manager-fe/blob/master/LICENSE)
* Coded by Carlos Mitchell 
=========================================================
*/
import React, { useState } from "react";
import axios from "axios";
import "./SignUp.scss";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const SignUp = () => {
  const defaul = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: ""
  };
 const [register, setRegister] = useState(defaul);

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  console.log(register);
 
  const handleSubmit = e => {
    e.preventDefault();
   
    axiosWithAuth()
      .post("auth/register", register) // end point here!!
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        
        setRegister(defaul);
      })
      .catch(err => console.log(err));
      document.getElementById('signUpForm').reset();
  };

  return (
    <>
      <div className='contactFormHolder main-content'>
        <h1>Create an Account</h1>
        <form id='signUpForm' className='contactForm'autoComplete="new-password" onSubmit={handleSubmit}>
          
            <label for='first_name'>First Name</label>
            <input 
              type="text"
              name="firstName"
              value={register.first_name}
              onChange={handleChange}
              placeholder={"First Name"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "First Name")}
              className="First_Name" required autoFocus
            />
             

        
          <label for='last_name'>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={register.last_name}
              onChange={handleChange}
              placeholder={"Last Name"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Last Name")}
              className="Last_Name" required
            />
        

      
            <label for='email'>Email</label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder={"Example@domain.com"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Example@domain.com")}
              className="email" required
            />
        

         
          <label for='password'>Password</label>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              placeholder={"Password"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Password")}
              className="password" required
            />
     

     
          <label for='phone_number'>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={register.phone_number}
              onChange={handleChange}
              placeholder={"Phone Number"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Phone Number")}
              className="tel"
            />
       

          <div class="search_categories">
         <div class="select">
            <select
              type="checkbox"
              name="role"
              value={register.role}
              onChange={handleChange}
              className="inputField_checkbox" required
            >
              <option value="">Please choose one option</option>
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
            </select>
            </div>
         </div>
          <div className='buttonHolder'>
            <button className='cancelBtn' type='reset'>Cancel</button>
            <button className='submitBtn' type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default SignUp;






// import React, { useState } from "react";
// import "./Sigin.scss";
// import axios from "axios";

// function SingIn(props) {
//   const [error, setError] = useState();
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   console.log(data);
//   const handleChange = event => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     //auth() what type of auth we will use

//     axios
//       .post("//PLACE BACK END HERE", data)
//       .then(result => {
//         localStorage.setItem("token", result.data.token);
//         console.log(result.data);
//       })
//       .catch(err => {
//         setError(err.response.data.message);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div className="error">{error}</div>}

//       <input
//         type="text"
//         name="email"
//         placeholder="example@domain.com"
//         onFocus={e => (e.target.placeholder = "")}
//         onBlur={e => (e.target.placeholder = "example@domain.com")}
//         value={data.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onFocus={e => (e.target.placeholder = "")}
//         onBlur={e => (e.target.placeholder = "Password")}
//         value={data.password}
//         onChange={handleChange}
//       />

//       <button className="submit" type="submit">
//         SingIn
//       </button>
//     </form>
//   );
// }

// export default SingIn;
