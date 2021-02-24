import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Pokemon } from './Pokemon'
import { GET_POKEMONS } from './getPokemons'

export function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 24 },
    })
    
    return (
        <div className="container">
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    )
}