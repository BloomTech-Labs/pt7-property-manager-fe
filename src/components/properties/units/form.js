import React, { useState, useEffect } from "react";
import ".././units/Forms.scss";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import DropUp from "../../dropup/DropUp";
import { Button } from "reactstrap";
import ConfirmationModal from "./ConfirmationModal";
export default function ApplicationForm(props) {
  const [property, setProperty] = useState({});
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/properties/${props.match.params.property_id}`)
      .then((res) => {
        console.log(res.data.property);
        setProperty(res.data.property);

        axiosWithAuth()
          .get(`/users/${res.data.property.manager_id}`)
          .then((res) => {
            console.log(res.data.user);
          })
          .catch((err) => {
            console.error(err);
          });

        axiosWithAuth()
          .get(`/units/${props.match.params.unit_id}`)
          .then((res) => {
            console.log(res.data.unit);
            setUnit(res.data.unit);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  //*********************FORM***********************/
  const [apply, setApply] = useState({
    first_name: `${sessionStorage.getItem("firstName")}`,
    last_name: `${sessionStorage.getItem("lastName")}`,
    marital_status: "",
    email: `${sessionStorage.getItem("email")}`,
    move_in_date: "",
    lease_terms: "",
    date_of_birth: "",
    app_address: "",
    app_city: "",
    app_state: "",
    app_zip: "",
    app_country: "",
    government_id: "",
    social_security: "",
    document: `${sessionStorage.getItem("document")}`,
    status: "pending",
    unit_id: `${props.match.params.property_id}`,
  });
  console.log("apply", apply); //delete
  
  
  const initialValues = {
    first_name: "",
    last_name: "",
    marital_status: "",
    email: "",
    move_in_date: "",
    lease_terms: "",
    date_of_birth: "",
    app_address: "",
    app_city: "",
    app_state: "",
    app_zip: "",
    app_country: "",
    government_id: "",
    social_security: "",
    document: `${sessionStorage.getItem("document")}`,
    status: "pending",
    unit_id: `${props.match.params.property_id}`,
  };
  const [confirm, setConfirm] = useState({
    confirmed: false,
  });

  useEffect(
    (e) => {
      if (apply.first_name === "null") {
        setApply(initialValues);
      }
    },
    [apply.first_name, initialValues]
  );

  const handleChange = (e) => {
    setApply({ ...apply, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/applications", apply)
      .then((res) => {
        console.log(res);
        console.log("status", res.status);
        confirmate()
        if (res.status === 200) {
          setConfirm({ confirmed: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
 
  };
  const confirmate = ()=>{
    return(
    <ConfirmationModal/>
    )
  }

  const dateUnits = Date(unit.date_available);
  return (
    <div className="main-content-Form">
      <p style={{ fontSize: "2rem" }}>{property.address}</p>
      <p style={{ fontSize: "2rem" }}>
        {property.city}, {property.state} {property.zip}
      </p>
      <p style={{ fontSize: "2rem" }}>{property.country}</p>
      <div className="mb-5" style={{ fontSize: "1.5rem" }}>
        <p key={unit.id}>
          Unit {unit.number} - Available {dateUnits.substring(0,3)} {dateUnits.substring(4,10)}-{dateUnits.substring(11,15)}
        </p>
      </div>
     
      {/* FORM START HERE  */}
      <h2>Application Form</h2>
      <form className="addPropForms" autoComplete="new-password">
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          name="first_name"
          value={apply.first_name}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
          required
        />
        <label htmlFor="LastName">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={apply.last_name}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={apply.email}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
          required
        />

        <label style={{ marginBottom: "20px" }} htmlFor="marital_status">
          Marital Status
        </label>
        <div
          style={{
            background: "transparent",
            marginBottom: "20px",
            fontSize: "2.5rem",
            height: "65px",
            lineHeight: "1",
            width: "20%",
          }}
        >
          <select
            type="checkbox"
            name="marital_status"
            value={apply.marital_status}
            style={{ marginBottom: "20px" }}
            onChange={handleChange}
            required
          >
            <option value="">Please choose one option</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        {/* move_in_date */}
        <label>Move in Date</label>
        <input
          type="date"
          name="move_in_date"
          value={apply.move_in_date}
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
          required
        />
        {/* lease_terms: 12 */}

        <label style={{ marginBottom: "20px" }} htmlFor="leas_term">
          Lease Term
        </label>
        <div
          style={{
            background: "transparent",
            marginBottom: "20px",
            fontSize: "2.5rem",
            height: "65px",
            lineHeight: "1",
            width: "20%",
          }}
        >
          <select
            type="checkbox"
            name="lease_terms"
            value={apply.lease_terms}
            onChange={handleChange}
            required
            style={{ marginBottom: "20px" }}
          >
            <option value="">Please choose one option</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </div>

        {/* date_of_birth */}
        <label>Date of Birth</label>
        <input
          type="date"
          name="date_of_birth"
          value={apply.date_of_birth}
          onChange={handleChange}
          style={{ marginBottom: "20px" }}
          required
        />
        {/* app_address */}
        <label htmlFor="address">Address</label>
        <input
          type="address"
          name="app_address"
          value={apply.app_address}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/*app_city */}
        <label htmlFor="city">City</label>
        <input
          type="address"
          name="app_city"
          value={apply.app_city}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/*app_state */}
        <label htmlFor="state">State</label>
        <input
          type="address"
          name="app_state"
          value={apply.app_state}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/* app_zip */}
        <label htmlFor="zipcode">zipcode</label>
        <input
          type="address"
          name="app_zip"
          value={apply.app_zip}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/* app_country */}
        <label htmlFor="country">Country</label>
        <input
          type="address"
          name="app_country"
          value={apply.app_country}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/* government_id */}
        <label htmlFor="goverment_id">Goverment Id</label>
        <input
          type="password"
          name="government_id"
          value={apply.government_id}
          onChange={handleChange}
          required
          style={{ marginBottom: "20px" }}
        />
        {/* social_security */}
        <label htmlFor="social_security">Social Security</label>
        <input
          type="password"
          name="social_security"
          value={apply.social_security}
          onChange={handleChange}
          required
          //  style={{marginBottom:"20px"}}
        />
        {/* document  */}
        <div style={{ marginBottom: "20px" }}>
          <DropUp />
        </div>
       
        <Button color="success" type="submit" onClick={handleSubmit} onSubmit={confirmate}>
          Submit
        </Button>
      </form>
    </div>
  );
};