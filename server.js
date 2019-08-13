const express = require("express")
const graphqlHTTP = require("express-graphql")
const myschema = require("./myschema")
//
const app = express()
//
app.use("/graphql", graphqlHTTP({
  schema: myschema,
  graphiql: true
}))

// const Port = process.env.PORT || 5000//or 5000 in development
// app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}`))

app.listen(5000, () => console.log(`Servidor inicializado en el puerto: 5000`))
//Then navigate to http://localhost:5000/graphql
