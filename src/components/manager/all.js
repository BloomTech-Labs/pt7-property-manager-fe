import React, {useState, useEffect} from "react";
import ManagerCard from "./managerCard.js";
import './manager.scss'
import Axios from "axios";

function Managers() {
  const [managers, setManagers] = useState([]);
  useEffect(() => {
    Axios
      .get('https://property-manager-be.herokuapp.com/users')
      .then((res) => {
        console.log(res)
        setManagers(res.data.users)
      })
      .catch((err) => console.log(err))
  }, [])
  const blankImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FNo_portrait_blanko.svg%2F480px-No_portrait_blanko.svg.png&f=1&nofb=1'
    return(
      <div className="cardHolder">
        {managers.map((manager) => (
          <ManagerCard 
            key={manager.id} firstName={manager.firstName} lastName={manager.lastName} 
            img={manager.img === null ? blankImg : manager.img}
            phoneNumber={manager.phoneNumber === null ? '0000000000' : manager.phoneNumber} 
            email={manager.email} id={manager.id}/>
        ))}
      </div>
    )
};

export default Managers
