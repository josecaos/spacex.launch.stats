import React from 'react'

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, launch_success} }) {


  return (
      <div className="card card-body">
        <div className="row">
          <div className="col-md-9">
            <h4 className="col-12   ">Mission:</h4>
            <p className="col-12"> {mission_name}</p>
            <p className="col-12"> {launch_date_local}</p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary my-auto">Launch Details</button>
          </div>
        </div>
      </div>
    )
}
