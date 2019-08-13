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
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent,args) {
        // get data
        return axios.get('https://api.spacexdata.com/v3/launches')//gives a promise back
        .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
