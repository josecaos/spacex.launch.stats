import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import LaunchItem from "./LaunchItem"

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
  launches {
    flight_number
    mission_name
    launch_date_local
    launch_success
  }
}
`

export class Launches extends Component {

  render() {
    return (
      <section>
      <article>
      <h1 className="text-center">Launches</h1>
      <Query query={LAUNCHES_QUERY}>
      {
        ({loading,error,data}) => {

          if(loading) return <h3> Loading ... </h3>
          if(error) console.log(error)
          // iteramos sobre los datos
          return (
            <div className="flight">
            {
                data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))
            }
            </div>
          )
        }
      }
      </Query>

      </article>
      </section>
    )
  }
}
