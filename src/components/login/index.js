import React, { useState } from "react";
import "./Sigin.scss";
import axios from "axios";

function SingIn(props) {
  const [error, setError] = useState();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  console.log(data);
  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    //auth() what type of auth we will use

    axios
      .post("//PLACE BACK END HERE", data)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        console.log(result.data);
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

      <input
        type="text"
        name="email"
        placeholder="example@domain.com"
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "example@domain.com")}
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Password")}
        value={data.password}
        onChange={handleChange}
      />

      <button className="submit" type="submit">
        SingIn
      </button>
    </form>
  );
}

export default SingIn;
