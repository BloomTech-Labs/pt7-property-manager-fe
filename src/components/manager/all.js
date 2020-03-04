import React, {useState, useEffect} from "react";
import ManagerCard from "./managerCard.js";
import './manager.scss'
import Axios from "axios";

function getManagers(managers = []) {
  Axios
    .get('https://property-manager-be.herokuapp.com/users')
    .then((res) => {
      managers = [...managers, res.data]
      console.log(managers)
    })
    .catch((err) => console.log(err))
  return managers
}

function Managers() {
  const [managers, setManagers] = useState([
    {
      firstName: 'Caleb',
      phoneNumber: '0987654321',
      email: 'caleb@gmail.com',
      img: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'
    },
    {
      firstName: 'Mitchell',
      phoneNumber: '1234567890',
      email: 'mitchell@gmail.com',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.dailystar.co.uk%2Fdynamic%2F204%2Fphotos%2F301000%2FNorth-Korea-Kim-Jong-un-War-US-Health-Dying-Fat-Short-Diabetes-Gout-Steroids-Overweight-1140301.jpg&f=1&nofb=1'
    },
    {
      firstName: 'Sanchez',
      phoneNumber: '0192837465',
      email: 'sanchez@gmail.com',
      img: 'https://theredphoenix.files.wordpress.com/2010/09/pinochet2.jpg'
    },
  ]);
  getManagers(managers)

    return(
      <div className="cardHolder">
        {managers.map((manager, i) => (
          <ManagerCard 
            key={i} firstName={manager.firstName} img={manager.img}
            phoneNumber={manager.phoneNumber} email={manager.email}/>
        ))}
      </div>
    )
};

export default Managers