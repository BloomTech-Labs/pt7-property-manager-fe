import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/";
import Home from "./components/home/";
import Login from "./components/login/";
import Signup from "./components/signup/";
import About from "./components/about";
import Contact from "./components/contact";
import Logout from "./components/logout/";
import PrivateRoute from "./components/PrivateRoute.js";
import UserPage from "./components/user";
import { UserProvider } from "./contexts/userContext";
import Footer from "./components/footer";
import logo from './icons/pm.png'

function App() {
  const [user, setUser] = useState({
    username: localStorage.getItem("username"),
    user_id: localStorage.getItem("user+id")
  });

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header">
          <div className="logoHolder">
            <img className="logo" src={logo} alt='logo' />
          </div>
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Logout" component={Logout} />
          <PrivateRoute exact path="/User" component={UserPage} />
          {/* <Route exact path="/User" component={UserPage} /> */}
        </Switch>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
