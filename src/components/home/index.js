import React from "react";
import "./homepage.scss";

export default function Home() {
  return (
    <section className="mainContent">
      <div className="heading w-50">
        <h1>
          Find your new home with <br></br>
          Property Manager
        </h1>
        <button className="getStarted">Get Started</button>
      </div>
      <div className="icon w-50"></div>
    </section>
  );
}
