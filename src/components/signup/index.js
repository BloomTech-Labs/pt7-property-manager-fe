import React, { useState } from "react";
import axios from "axios";
import './SignUp.scss'
//import { axiosAuthenticate } from "../axiosAuthenticate/axiosAuthenticate";

const SignUp = () => {
  const defaul = {
    first_name:"",
    last_name:"",
    email: "",
    password: "",
    phone_number:"",
    // role:[]  
  };

  const [register, setRegister] = useState(defaul);

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // axiosAuthenticate() // ?? How are we gonna handle Auth
    axios
      .post("Link HERE", register) // end point here!! 
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("username", res.data.username);

        setRegister(defaul);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="formContainer">
        <h1>Create an Account</h1>
        <form autoComplete="new-password" onSubmit={handleSubmit}>
          <li>
            <p>Fisrt Name</p>
            <input
              type="text"
              name="first_name"
              value={register.first_name}
              onChange={handleChange}
              className="inputField"
            />
          </li>

          <li>
            <p>Last Name</p>
            <input
              type="text"
              name="last_name"
              value={register.last_name}
              onChange={handleChange}
              className="inputField"
            />
          </li>

          <li>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              className="inputField"
            />
          </li>

          <li>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              className="inputField"
            />
          </li>

          <li>
            <p>Phone Number</p>
            <input
              type="tel"
              name="phone_number"
              value={register.phone_number}
              onChange={handleChange}
              className="inputField"
            />
          </li>



          <button type="submit">Join Now</button>
        </form>
      </div>
    </>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default SignUp;
