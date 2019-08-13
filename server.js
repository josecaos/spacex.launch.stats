const express = require("express")
const graphqlHTTP = require("express-graphql")
const myschema = require("./myschema")
//
const app = express()
const PORT = process.env.PORT || 5000// ... or 5000 in development
//
app.use("/graphql", graphqlHTTP({
  schema: myschema,
  graphiql: true
}))

app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}`))

// Inicia Servidor: npm run server
//Para probar querys -> http://localhost:5000/graphql
