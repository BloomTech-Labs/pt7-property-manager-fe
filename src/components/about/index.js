import React from "react";
import "./about.scss";
import house from "../../icons/house.svg";
import best from "../../icons/best_place.svg";
import smart from "../../icons/smart_home.svg";
import suburbs from "../../icons/suburbs.svg"

export default function About() {
  return (
    <div className='main-content'>
    
      <div className="container">
        <section className="One Section">
          <div className="card">
      
      <div className="content">
        <div className="text">
        <h2>What is Property Manager?</h2>
         <p className='paragraph'>As a property owner can you imagine not being able to organize and manage your rental properties efficiently? Or getting confused with all the third-party software services you use? And as a renter can you imagine being stressed out all the time because of house issues? This is what the Property Owner and Renters are facing. Access to a single software that lets Property Owners manage her tasks in one place, allowing them to do their job effectively, efficiently, and thoroughly is not readily available.</p>
         </div>
      <img src={house} className="house" alt="house" />
      </div>
      </div>
      </section>

      <section className="Two Section">
          <div className="card">
      
      <div className="content">
      <div className="text">
        <h2>Where  Property Manager?</h2>
         <p className='paragraph'>As a property owner can you imagine not being able to organize and manage your rental properties efficiently? Or getting confused with all the third-party software services you use? And as a renter can you imagine being stressed out all the time because of house issues? This is what the Property Owner and Renters are facing. Access to a single software that lets Property Owners manage her tasks in one place, allowing them to do their job effectively, efficiently, and thoroughly is not readily available.</p>
         </div>
      <img src={smart} className="house" alt="house" />
      </div>
      </div>
      </section>

      <section className="Three Section">
          <div className="card">
      
      <div className="content">
      <div className="text">
        <h2>Why  Property Manager?</h2>
         <p className='paragraph'>As a property owner can you imagine not being able to organize and manage your rental properties efficiently? Or getting confused with all the third-party software services you use? And as a renter can you imagine being stressed out all the time because of house issues? This is what the Property Owner and Renters are facing. Access to a single software that lets Property Owners manage her tasks in one place, allowing them to do their job effectively, efficiently, and thoroughly is not readily available.</p>
         </div>
      <img src={suburbs} className="house" alt="house" />
      </div>
      </div>
      </section>

      <section className="Four Section">
          <div className="card">
      
      <div className="content">
      <div className="text">
      <h2>How Property Manager?</h2>
         <p className='paragraph'>As a property owner can you imagine not being able to organize and manage your rental properties efficiently? Or getting confused with all the third-party software services you use? And as a renter can you imagine being stressed out all the time because of house issues? This is what the Property Owner and Renters are facing. Access to a single software that lets Property Owners manage her tasks in one place, allowing them to do their job effectively, efficiently, and thoroughly is not readily available.</p>
         </div>
      <img src={best} className="house" alt="house" />
      </div>
      </div>
      </section>
      
      
      </div>
    </div>
  );
}
