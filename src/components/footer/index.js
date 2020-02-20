import React from "react";
import '../home/homepage.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <form className='newsletter'>
        <h2>Stay up to date with our newsletter</h2>
        <input className='newsletterEmail' name='newsletterEmail' type='email' placeholder='Enter your email'></input>
        <button className='submitBtn'>Submit</button>
      </form>
      <ul className='links'>
        <li className='link'><a href='/contact'>Contact us</a></li>
        <li className='link'><a href='/#'>FAQs</a></li>
        <li className='link'><a href='/about'>Meet the team</a></li>
      </ul>
    </footer>
  );
}
