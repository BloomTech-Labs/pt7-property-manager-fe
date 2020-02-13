import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/";
import Home from "./components/home/";
import Login from "./components/login/";

function App() {
  const [user, setUser] = useState({
    username: localStorage.getItem("username"),
    user_id: localStorage.getItem("user+id")
  });

  return (
    <div className="App">
      <header className="App-header">My Property Manager</header>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
