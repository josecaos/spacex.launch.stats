const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("./schema")
const cors = require('cors')
//
const app = express()
const PORT = process.env.PORT || 5000// 5000 for development

// permite cross-origin para front y back en distintos puertos
app.use(cors())

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(PORT, () => console.log(`Servidor inicializado en el puerto: ${PORT}`))
// app.listen(5000, () => console.log(`Servidor inicializado en http://localhost:${PORT}`))

// Inicia Servidor: npm run server
//Para probar querys -> http://localhost:5000/graphql
