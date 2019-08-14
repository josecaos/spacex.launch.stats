import React, {Component} from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

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
      <div>
        <h1>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({loading,error,data}) => {

              if(loading) return <h3> Loading ... </h3>
              // if(error) console.log(error)
              console.log(data);
              return <h1>YEAHHH</h1>
            }
          }
        </Query>

      </div>
    )
  }
}

export default Launches
