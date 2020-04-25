import React,{useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import './../index.scss';
import {axiosWithAuth} from "../../../utils/axiosWithAuth";
export default function Unit(props){
	const [property, setProperty]=useState({});
	const [unit, setUnit]=useState([]);
	const [manager, setManager]=useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/properties/${props.match.params.property_id}`)
      .then(res => {
        //console.log(res.data.property);
        setProperty(res.data.property);
            axiosWithAuth()
              .get(
                `/users/${res.data.property.manager_id}`
              )
              .then(res => {
                //console.log(res.data.user);
			    setManager(res.data.user);
              })
              .catch(err => {
                console.error(err);
              });

			axiosWithAuth()
			  .get(
				  `/units/${props.match.params.unit_id}`
			   )
              .then(res => {
                console.log(res.data.unit);
				setUnit(res.data.unit);
              })
              .catch(err => {
                console.error(err);
              });
      })
      .catch(err => {
        console.error(err);
      });
  }, [props.match.params.unit_id]);
  const isLoggedIn = sessionStorage.getItem("token")
  console.log('isLoggedIn', isLoggedIn);
  
  return (
    <div className="main-content m-5 row w-90"> 
		<div className="col-lg-4">
			<div className="mx-5 mb-5">
				<img
					src={property.img}
					style={{maxWidth:"100%"}}
					alt="Insert into Property Table to display"
				/>
				<div className="mx-5 mb-5" style={{fontSize:"1.3rem"}}>
					<p>{property.address}</p>
					<p>{property.city}, {property.state} {property.zip}</p>
					<p>{property.country}</p>
				</div>
				<div className="mx-5 mb-5" style={{fontSize:"1rem"}}>
					<p> Managed by{" "}
						<Link to={`/manager/${property.manager_id}`}> {manager.firstName+" "+manager.lastName}</Link>{" "}
					</p>
				</div>

				<Link to={`/Properties/${props.match.params.property_id}/Unit/${unit.id}/Apply`}><button className="btn-success btn btn-lg" style={{fontSize:"2rem"}}>Apply Now</button></Link>
			</div>
		</div>
		<div className="col-lg-8 information">
			<div className="mx-5 mb-5 text-left">
				<p key={unit.id}>Unit {unit.number} </p>
				<p key={unit.id+"Description"}>{unit.description}</p>
				<hr/>
				<h3 className="text-center" style={{fontSize:"2rem", fontWeight:"bold"}}>Lease Info</h3>
				<p key={unit.id+"Availability"}>Available {(unit.date_available) ? unit.date_available.substring(5,7)+"-"+unit.date_available.substring(8,10)+"-"+unit.date_available.substring(0,4): "" }</p>
				<p key={unit.id+"type"}>Structure {unit.type} </p>
				<p key={unit.id+"lease_term"}>Lease Term {unit.lease_term} Months</p>
				<p key={unit.id+"monthly_rent"}>Rent ${unit.monthly_rent} </p>
				<p key={unit.id+"security_deposit"}>Security Deposit ${unit.security_deposit} </p>
				<p key={unit.id+"fees"}>Fees {unit.fees} </p>
				<hr/>
				<h3 className="text-center" style={{fontSize:"2rem", fontWeight:"bold"}}>Property Info</h3>
				<p key={unit.id+"Parking"}>Parking {unit.parking} </p>
				<p key={unit.id+"cooling"}>Cooling {unit.cooling} </p>
				<p key={unit.id+"heating"}>Heating {unit.heating} </p>
				<p key={unit.id+"pets"}>Pets {unit.pets} </p>
				<p key={unit.id+"laundry"}>Laundry {unit.laundry} </p>
				<p key={unit.id+"sqft"}>SqFt. {unit.sqft} </p>
				<hr/>
				<h3 className="text-center" style={{fontSize:"2rem", fontWeight:"bold"}}>Nearby School Info</h3>
				<p key={unit.id+"district"}>District {unit.district} </p>
				<p key={unit.id+"elementary"}>Elementary {unit.elementary} </p>
				<p key={unit.id+"middle"}>Middle {unit.middle} </p>
				<p key={unit.id+"high"}>High {unit.high} </p>
				<hr/>

				<div className="text-center">
					{isLoggedIn ? <Link to={`/Properties/${props.match.params.property_id}/Unit/${unit.id}/Apply`}><button className="btn-success btn btn-lg" style={{fontSize:"2rem"}}>Apply Now</button></Link> : <Redirect to="/Login" />}
					{/* <Link to={`/Properties/${props.match.params.property_id}/Unit/${unit.id}/Apply`}><button className="btn-success btn btn-lg" style={{fontSize:"2rem"}}>Apply Now</button></Link> */}
				</div>
			</div>
		</div>
	  
    </div>
  );
}
