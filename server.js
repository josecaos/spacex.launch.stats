const express = require("express")
const graphqlHTTP = require("express-graphql")
//
const app = express()
//
app.use("/graphql", graphqlHTTP({
  schema: 'MySchema',
  graphiql: true
}))

const Port = process.env.PORT || 5000//or 5000 in development
app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}]+`))
