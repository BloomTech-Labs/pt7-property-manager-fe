import React, {
  Component
} from "react"
import './contact.scss'

class Contact extends Component {
  state = {

  }

  render() {
    return ( 
      <div className='contactFormHolder main-content'>
        <form className='contactForm'>
          <label htmlFor='fullName'>Full Name</label>
          <input name='fullname' type='text' required placeholder='John Smith' autoFocus></input>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' required placeholder='example@email.com'></input>
          <label htmlFor='phoneNum'>Phone Number</label>
          <input name='phoneNum' type='tel' required maxLength='10' placeholder='1234567890'></input>
          <label htmlFor='subject'>Subject</label>
          <input name='subject' type='text' required placeholder='e.g. Payment Plans'></input>
          <label htmlFor='message'>Brief message</label>
          <textarea className='message' name='message' maxLength='250' placeholder='250 characters max'></textarea>
          <div className='buttonHolder'>
            <button className='cancelBtn' type='reset'>Cancel</button>
            <button className='submitBtn'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact
