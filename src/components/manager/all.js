import React, {useState, useEffect} from "react";
import ManagerCard from "./managerCard.js";

function Managers() {
  const [managers, setManagers] = useState([]);

    return(
      <div className="main-content cardHolder">
        <h2>List of Managers Goes Here.</h2>
        {/* {managers.map((manager, i) => {
          return <ManagerCard key={i} />
        })} */}
        <ManagerCard />
      </div>
    )
};

export default Managers