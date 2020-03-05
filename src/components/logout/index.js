import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import userContext from "../../contexts/userContext";
export default function Logout() {

const {user, setUser}=useContext(userContext);
  let logout=function(){
    sessionStorage.clear();
	setUser();
   return(<Route>
     <Redirect to="/" />
   </Route>);
  }

  return (
    <div className="main-content">
      {logout()}
    </div>
  );
}
