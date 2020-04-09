/*!
=========================================================
* Property manager  Signup React - v1.0
=========================================================
* Product Page:https://github.com/Lambda-School-Labs/pt7-property-manager-fe
* Licensed under MIT (https://github.com/Lambda-School-Labs/pt7-property-manager-fe/blob/master/LICENSE)
* Coded by Carlos Mitchell 
=========================================================
*/
import React, { useState, useContext} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./LogIn.scss";
import UserContext from "../../contexts/userContext";

const SignUp = (props) => {
  const initialState = {email: "", password: ""}
  const { setUser } = useContext(UserContext);
  const [register, setRegister] = useState({email: "", password: ""});
  const [valid, setValid]=useState({badCredentials:false})
   
  const handleChange = e => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
   
    axios.post("https://property-manager-be.herokuapp.com/auth/login", register)
    .then(res=>{ 
		//console.log(res.data.user); 
      //console.log(res.data.token); 
      sessionStorage.clear(); 
      sessionStorage.setItem('token', res.data.token); 
      sessionStorage.setItem('userID', res.data.user.id); 
      sessionStorage.setItem('firstName', res.data.user.firstName); 
      sessionStorage.setItem('lastName', res.data.user.lastName);
      sessionStorage.setItem('phoneNumber', res.data.user.phoneNumber);
      sessionStorage.setItem('role', res.data.user.role);
      sessionStorage.setItem('img', res.data.user.img);
      sessionStorage.setItem('email', res.data.user.email);

	 setUser(
		 res.data.user
	 );
      props.history.push('/dashboard');
      //console.log(res.data)
    })
      .catch(err=>{
      console.error("provide right credentials",err);
      setValid({badCredentials:true})
      setRegister(initialState)
      });
    };
 
  
  const TheSignup = ()=>{
    return(
      <span className="saccount">
    <Link to="/signup">Signup for an account</Link>
      </span>
    )
  }
  let badone;
  let hey;
  if (valid.badCredentials === true){
   badone = `Incorrect email or password. `;
   hey = TheSignup();
     }
    return (
    <>
      <div className='contactFormHolder main-content'>
        <h1>Log in</h1>
        <form id='logInForm' className='contactForm'autoComplete="new-password" onSubmit={handleSubmit}>
          
           <label htmlFor='email'>Email</label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              placeholder={"Example@domain.com"}
              onFocus={e => (e.target.placeholder = "" )}
              onClick={()=>(setValid({badCredentials: false}))}
              onBlur={e => (e.target.placeholder = "Example@domain.com")}
              className="email" required
            />
            <label htmlFor='password'>Password</label>
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
            <div className="invalid">{badone}{hey}</div>
            <div className='buttonHolder'>
            <button className='cancelBtn' type='reset' onClick={()=>(setValid({badCredentials: false}))} >Cancel</button>
            <button className='submitBtn' type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
