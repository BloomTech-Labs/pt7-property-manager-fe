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
import "./LogIn.scss";
import { axiosWithAuth } from "../../utils/axiosWithAuth";


const SignUp = (props) => {
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
   
    axios.post("https://property-manager-be.herokuapp.com/auth/login", register)
    .then(res=>{ console.log(res.data.user); 
      console.log(res.data.token); 
      sessionStorage.clear(); 
      sessionStorage.setItem('token', res.data.token); 
      sessionStorage.setItem('userID', res.data.user.id); 
      sessionStorage.setItem('firstName', res.data.user.firstName); 
      sessionStorage.setItem('lastName', res.data.user.lastName);
      sessionStorage.setItem('phoneNumber', res.data.user.phoneNumber);
      sessionStorage.setItem('role', res.data.user.role);
      sessionStorage.setItem('img', res.data.user.img); 
      props.history.push('/dashboard'); })

      document.getElementById('signUpForm').reset();
  };

  return (
    <>
      <div className='contactFormHolder main-content'>
        <h1>Log in</h1>
        <form id='signUpForm' className='contactForm'autoComplete="new-password" onSubmit={handleSubmit}>
          
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

          <div className='buttonHolder'>
            <button className='cancelBtn' type='reset'>Cancel</button>
            <button className='submitBtn' type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
