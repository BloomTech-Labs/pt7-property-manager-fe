import React, { useState } from "react";
import axios from "axios";
import "./SignUp.scss";
//import { axiosAuthenticate } from "../axiosAuthenticate/axiosAuthenticate";

const SignUp = () => {
  const defaul = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    role: ""
  };

  const [register, setRegister] = useState(defaul);

  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  console.log(register);
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
            <input
              type="text"
              name="first_name"
              value={register.first_name}
              onChange={handleChange}
              placeholder={"First Name"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "First Name")}
              className="First_Name"
            />
          </li>

          <li>
            <input
              type="text"
              name="last_name"
              value={register.last_name}
              onChange={handleChange}
              placeholder={"Last Name"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Last Name")}
              className="Last_Name"
            />
          </li>

          <li>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder={"Example@domain.com"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Example@domain.com")}
              className="email"
            />
          </li>

          <li>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              placeholder={"Password"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Password")}
              className="password"
            />
          </li>

          <li>
            <input
              type="tel"
              name="phone_number"
              value={register.phone_number}
              onChange={handleChange}
              placeholder={"Phone Number"}
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "Phone Number")}
              className="tel"
            />
          </li>

          <li>
            <select
              type="checkbox"
              name="role"
              value={register.role}
              onChange={handleChange}
              className="inputField_checkbox"
            >
              <option value="landlord">Landlord</option>
              <option value="tenant">Tenant</option>
            </select>
          </li>

          <button className="submit" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </>
  );
};

// ROUTE USER TO LOGIN PAGE AFTER CREATING ACCOUNT

export default SignUp;
