import React from "react";
import './homepage.scss'

export default function Home() {
  return (
    <div>
      <section className="mainContent">
        <div className="heading w-50">
          <h1>Find your new home with <br></br>
          Property Manager</h1>
          <button className="getStarted">Get Started</button>
        </div>
        <div classNam e="icon w-50"></div>
      </section>
      <section className="propertyManager">
        <div className="heading">
          <h2>Property Manager aims to reduce communication friction between landlord and tenant.</h2>
        </div>
      </section>      
      <section className="ourGoals">
        <div className="heading">
          <ul className='goalUl'><h3>We strive to provide:</h3>
            <li className="goal">Clear visibility and access to important property documents</li>
            <li className="goal">Up-to-date progress on renter requests</li>
            <li className="goal">And be seamless one-stop shop for both renters and owners</li>
          </ul>
        </div>
      </section>      
    </div>
  );
}
