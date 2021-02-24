import React from "../_snowpack/pkg/react.js";
import {useQuery} from "../_snowpack/pkg/@apollo/react-hooks.js";
import {Pokemon} from "./Pokemon.js";
import {GET_POKEMONS} from "./getPokemons.js";
export function PokemonContainer() {
  const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
    variables: {first: 24}
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, pokemons && pokemons.map((pokemon) => /* @__PURE__ */ React.createElement(Pokemon, {
    key: pokemon.id,
    pokemon
  })));
}
