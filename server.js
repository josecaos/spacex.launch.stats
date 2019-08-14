const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("./gqlschema")
//
const app = express()
const PORT = process.env.PORT || 5000// ... or 5000 in development
//
app.use("/gqlschema", graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}`))

// Inicia Servidor: npm run server
//Para probar querys -> http://localhost:5000/graphql
