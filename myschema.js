const axios = require('axios')
// Aqui todo lo de GraphQL
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

// Launch type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: {type: GraphQLInt},
    mission_name: {type: GraphQLString},
    launch_year: {type: GraphQLString},
    launch_date_local: {type: GraphQLString},
    launch_succes: {type: GraphQLBoolean},
    rocket: {type: RocketType},
  })
})

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: {type: GraphQLString},
    rocket_name: {type: GraphQLString},
    rockert_type: {type: GraphQLString},
  })
})

// Root Query
// endpoints to resolve our data
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {//field
      type: new GraphQLList(LaunchType),
      resolve(parent,args) {
        // get data
        return axios.get('https://api.spacexdata.com/v3/launches')//gives a promise back
        .then(res => res.data)
      }
    },
    launch: {//field
      type: LaunchType,
      args: {
        flight_number: {type: GraphQLInt}
      },
      resolve(parent,args) {
         return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
         .then(res => res.data)
      }
    },
    rockets: {//field
      type: new GraphQLList(RocketType),
      resolve(parent,args) {
        // get data
        return axios.get('https://api.spacexdata.com/v3/rockets')//gives a promise back
        .then(res => res.data)
      }
    },
    rocket: {//field
      type: RocketType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parent,args) {
         return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
         .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
