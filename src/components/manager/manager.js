import React, { useState, useEffect, useRef } from "react";
// import los from "../../icons/los.jfif";
import './manager.scss'
import axios from 'axios'

const Manager = () => {
  const [manager, setManager] = useState([])
  const managerID = sessionStorage.getItem('id')
  useEffect(() => {
    axios
      .get(`https://property-manager-be.herokuapp.com/users/manager/${managerID}`)
      .then((res) => {
        console.log(res)
        setManager(res.data.manager)
      })
      .catch((err) => console.log(err))
  }, [setManager])

  const getProperties = () => {
    axios.get(`https://property-manager-be.herokuapp.com/properties/${managerID}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => {
        console.log('there was an error: ', err)
      })
  }
  const blankImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FNo_portrait_blanko.svg%2F480px-No_portrait_blanko.svg.png&f=1&nofb=1'
  return(
    <div className="cardHolder">
      <div className="managerCard">
        <img src={manager.img === null ? blankImg : manager.img} alt={manager.firstName} className='profilePic'></img>
        <div className='info'>
          <h3 className="managerName">{manager.firstName} {manager.lastName}</h3>
          <h4 className="telNumber">{manager.phoneNumber === null ? '0000000000' : manager.phoneNumber}</h4>
          <h4 className='managerEmail'>{manager.email}</h4> 
          <div className='buttonHolder'>
            <button className='viewPropsBtn' onClick={getProperties()}>View Properties</button>
          </div>                   
        </div>
      </div>
    </div>
  )
}

export default Manager