import React from 'react'
import ApolloClient from 'apolo-boost'
import ApolloProvider from 'react-apolo'
import logo from './img/spacex.logo.png'
import './App.css'

const client = new ApolloClient({
  url: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="SpaceX logo"/>
        </div>
      </header>
    </div>
    <ApolloProvider />
  );
}

export default App;
