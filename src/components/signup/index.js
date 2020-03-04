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



////***************************************************** */

{/* <div className='contactFormHolder main-content'>
        <form className='contactForm'>
          <label for='fullName'>Full Name</label>
          <input name='fullname' type='text' required placeholder='John Smith' autoFocus></input>
          <label for='email'>Email</label>
          <input name='email' type='email' required placeholder='example@email.com'></input>
          <label for='phoneNum'>Phone Number</label>
          <input name='phoneNum' type='tel' required maxLength='10' placeholder='1234567890'></input>
          <label for='subject'>Subject</label>
          <input name='subject' type='text' required placeholder='e.g. Payment Plans'></input>
          <label for='message'>Brief message</label>
          <textarea className='message' name='message' maxLength='250' placeholder='250 characters max'></textarea>
          <div className='buttonHolder'>
            <button className='cancelBtn' type='reset'>Cancel</button>
            <button className='submitBtn' type="submit">Submit</button>
          </div>
        </form>
      </div> */}

//**************************************************************************** */
{/* <div class="select-box">
    <div class="select-box__current" tabindex="1">
        <div class="select-box__value"><input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
            <p class="select-box__input-text">Cream</p>
        </div>
        <div class="select-box__value"><input class="select-box__input" type="radio" id="1" value="2" name="Ben" checked="checked" />
            <p class="select-box__input-text">Cheese</p>
        </div>
        <div class="select-box__value"><input class="select-box__input" type="radio" id="2" value="3" name="Ben" checked="checked" />
            <p class="select-box__input-text">Milk</p>
        </div>
        <div class="select-box__value"><input class="select-box__input" type="radio" id="3" value="4" name="Ben" checked="checked" />
            <p class="select-box__input-text">Honey</p>
        </div>
        <div class="select-box__value"><input class="select-box__input" type="radio" id="4" value="5" name="Ben" checked="checked" />
            <p class="select-box__input-text">Toast</p>
        </div><img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" /></div>
    <ul class="select-box__list">
        <li><label class="select-box__option" for="0" aria-hidden="aria-hidden">Cream</label></li>
        <li><label class="select-box__option" for="1" aria-hidden="aria-hidden">Cheese</label></li>
        <li><label class="select-box__option" for="2" aria-hidden="aria-hidden">Milk</label></li>
        <li><label class="select-box__option" for="3" aria-hidden="aria-hidden">Honey</label></li>
        <li><label class="select-box__option" for="4" aria-hidden="aria-hidden">Toast</label></li>
    </ul>
</div> */}
