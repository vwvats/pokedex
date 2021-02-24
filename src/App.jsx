import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonContainer } from './PokemonContainer'

function App() {
    const client = new ApolloClient({
        uri: 'https://graphql-pokemon2.vercel.app/'
    })
    
    return (
        <ApolloProvider client={client}>
            <main>
                <h1> Pokedex </h1>
                <PokemonContainer />
            </main>
        </ApolloProvider>
    )
}

export default App