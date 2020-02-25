import React from "react";

import { Button } from "reactstrap";

export default function Guest() {
  let renterPreview = function() {
    localStorage.setItem("role", "Renter");
    window.location.reload(false);
    return;
  };

  let managerPreview = function() {
    localStorage.setItem("role", "Manager");
    window.location.reload(false);
    return;
  };

  return (
    <div className="main-content">
      <h2>Guest Dashboard Will Be Here</h2>
      <div>
        <a href="/signup">
          <Button className="actionBtn" color="success" size="lg">
            Sign Up
          </Button>
        </a>
      </div>
      <div>
        <Button
          className="actionBtn"
          onClick={()=>renterPreview()}
          color="warning"
          size="lg"
        >
          Preview as a Renter
        </Button>
        <Button
          className="actionBtn"
          onClick={()=>managerPreview()}
          color="secondary"
          size="lg"
        >
          Preview as a Landlord
        </Button>
      </div>
    </div>
  );
}
