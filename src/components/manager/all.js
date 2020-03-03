import React, {useState, useEffect} from "react";
import ManagerCard from "./managerCard.js";
import './manager.scss'

function Managers() {
  const [managers, setManagers] = useState([
    {
      managerName: 'Caleb',
      phoneNumber: '0987654321',
      email: 'caleb@gmail.com',
    },
    {
      managerName: 'Mitchell',
      phoneNumber: '1234567890',
      email: 'mitchell@gmail.com',
    },
    {
      managerName: 'Sanchez',
      phoneNumber: '0192837465',
      email: 'sanchez@gmail.com',
    },
  ]);

    return(
      <div className="cardHolder">
        {managers.map((manager, i) => (
          <ManagerCard 
            key={i} managerName={manager.managerName} 
            phoneNumber={manager.phoneNumber} email={manager.email}/>
        ))}
        {/* <ManagerCard />
        <ManagerCard />
        <ManagerCard />
        <ManagerCard /> */}
      </div>
    )
};

export default Managers