import React, { useState} from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/";
import Home from "./components/home/";
import Login from "./components/login/";
import Signup from "./components/signup/";
import About from "./components/about";
import Contact from "./components/contact";
import Logout from "./components/logout/";
import Properties from "./components/properties";
import Property from "./components/properties/Property";
//import PrivateRoute from "./components/PrivateRoute.js";
import UserPage from "./components/manager";
import { UserProvider } from "./contexts/userContext";
import Footer from "./components/footer";
import logo from './icons/pm.png'
import Managers from "./components/manager/all";
import Manager from "./components/manager/manager";
import addProperty from "./components/properties/addProperty.js";
import EditProperty from "./components/properties/editProperty.js";
import addRenter from "./components/manager/addRenter.js";
import managerSettings from "./components/manager/settings.js";
import renterSettings from "./components/renter/settings.js";

// for testing only //
// import ManagerCard from "./components/manager/managerCard.js";

function App() {
  const [user, setUser] = useState({
    username: sessionStorage.getItem("username"),
    user_id: sessionStorage.getItem("user+id"),
    role: sessionStorage.getItem("role")
  });

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header">
          <div className="logoHolder">
            <a href="/"><img className="logo" src={logo} alt='logo' /></a>
          </div>
          <Navigation />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Properties" component={Properties} />
          <Route exact path="/Properties/:property_id" component={Property} />
          <Route exact path="/Manager" component={Managers} />
          <Route exact path="/Manager/add-renter" component={addRenter} />
          <Route exact path="/Manager/add-property" component={addProperty} />
          <Route exact path="/Manager/edit-property/:propertyId" component={EditProperty} />
          <Route exact path="/Manager/settings" component={managerSettings} />
          <Route path="/Manager/:manager_id" component={Manager} />
          <Route exact path="/Renter/settings" component={renterSettings} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Dashboard" component={UserPage} />

          {/* testing */}
          {/* <Route exact path='/Manager' component={ManagerCard}/>  */}
        </Switch>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
