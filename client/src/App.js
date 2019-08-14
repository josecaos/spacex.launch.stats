import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import logo from './img/spacex.logo.png'
import './App.css'
//
import Launches from './components/launches/Launches'
//

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"// URI, no URL
})

function App() {
  return (
    <ApolloProvider client={client}>
    <main className="App">
      <header>
        <div>
          <img src={logo} alt="SpaceX logo"/>
        </div>
      </header>
      <Launches />
    </main>
    </ApolloProvider>
  );
}

export default App;
