import React, { useState } from "react";
import "./Signin.scss";

function SingIn(props) {
  const [error, setError] = useState();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    auth()
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
        placeholder="Username"
        value={data.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />

      <button type="submit">SingIn</button>
    </form>
  );
}

export default SingIn;
