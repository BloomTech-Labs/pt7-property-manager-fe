import React, {useState, useEffect} from "react";
import axios from "axios";
import './index.scss'
import {Link} from "react-router-dom";
export default function UnitCard(props){
  let {property}=props;
  //console.log(property);
  const [units, setUnits]=useState([]);
  useEffect(() => {
    axios
      .get(`https://property-manager-be.herokuapp.com/properties/${property.id}/units`)
      .then(res => {
		console.log(res.data);
        setUnits(res.data.units);
      })
      .catch(err => {
        console.error(err);
        });
  }, []);
  return(
	<div>
		<h4 style={{fontSize:"1.9rem"}}>Units</h4>
		<div className="w-100">
			{units.map(unit=>(
				<div key={unit.id} className="row w-100">
					<div className="col-3">
						<p className="text-left">{unit.number}</p>
					</div>
					<div className="col-6" style={{fontSize:"1.0rem"}}>
						<p>{(unit.renter_id)? 
								<span> <span className="pr-2" style={{color:"green"}}>Occupied</span> Date Available</span> : 
								<span> <span style={{color:"red"}}>Vacant</span> Since</span>
							}: {unit.date_available.substring(5,7)}-{unit.date_available.substring(8,10)}-{unit.date_available.substring(0,4)}
						</p>
					</div>
					<div className="col-3" style={{fontSize:"1.5rem"}}>
						<Link className="mr-1" to={`/Properties/${property.id}/Unit/${unit.id}`}><button className="btn btn-lg btn-primary">More Info</button></Link>
						<Link to={`/Manager/Property/${property.id}/Unit/${unit.id}/Edit`}><button className="btn btn-lg btn-secondary">Edit Unit</button></Link>
					</div>
					<div className="col-12"> 
						<hr/>
					</div>
				</div>
			))}
		</div>
		<Link to={`/Manager/Property/${property.id}/Unit/Add`}><button style={{fontSize:"1.5rem"}} className="btn btn-lg btn-success">Add Unit</button></Link>
	</div>  
  )
}

