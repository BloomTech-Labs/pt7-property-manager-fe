import React from 'react';
import './homepage.scss'

export default function Home() {
  return (
    <div>
      <section className="mainContent contentSection">
        <div className="heading">
          <h1 className="header">
            Find your new home with <br></br>
            Property Manager
          </h1>
          <a href="#propertyManager">
            <button className="getStarted">Learn More</button>
          </a>
        </div>
      </section>
      <section id="propertyManager" className="propertyManager contentSection">
        <div className="heading">
          <h2 className="header">
            Property Manager aims to reduce communication friction between
            landlord and tenant.
          </h2>
          <a href="/signup">
            <button className="getStarted">Get Started</button>
          </a>
        </div>
      </section>
      <section className="ourGoals contentSection">
        <div className="heading">
          <ul className="goalUl header">
            <h3>We strive to provide:</h3>
            <li className="goal">
              Clear visibility and access to important property documents
            </li>
            <li className="goal">Up-to-date progress on renter requests</li>
            <li className="goal">
              And be seamless one-stop shop for both renters and owners
            </li>
          </ul>
        </div>
      </section>
      <section className="messaging contentSection">
        <div className="heading">
          <h2 className="header">Messaging made easier</h2>
          <h3>
            With Property Manager, message your landlord, submit work orders,
            and set alerts without switching between apps.
          </h3>
        </div>
      </section>  
      <section className='signUp contentSection'>
          <div className='heading'>
            <h2 className='header'>Sign up now</h2>
            <button className='signUpBtn'><a href='/signup'>Sign up</a></button>
          </div>
      </section>  
    </div>
  );
}
