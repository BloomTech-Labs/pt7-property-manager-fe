import React from "react";
import {Route, Redirect} from "react-router-dom";
export default function Logout() {

  let logout=function(){
    sessionStorage.clear();
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
