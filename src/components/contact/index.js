import React, {
  Component
} from "react"
import './contact.scss'

class Contact extends Component {
  state = {

  }

  render() {
    return ( 
      <div className='contactFormHolder'>
        <form className='contactForm'>
          <label for='fullName'>Full Name</label>
          <input name='fullname' type='text' required placeholder='John Smith' autoFocus></input>
          <label for='email'>Email</label>
          <input name='email' type='email' required placeholder='example@email.com'></input>
          <label for='phoneNum'>Phone Number</label>
          <input name='phoneNum' type='tel' required maxLength='10' placeholder='1234567890'></input>
          <label for='subject'>Subject</label>
          <input name='subject' type='text' required placeholder='e.g. Payment Plans'></input>
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