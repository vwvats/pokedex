import React from "../_snowpack/pkg/react.js";
import ApolloClient from "../_snowpack/pkg/apollo-boost.js";
import {ApolloProvider} from "../_snowpack/pkg/@apollo/react-hooks.js";
import {PokemonContainer} from "./PokemonContainer.js";
function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
  });
  return /* @__PURE__ */ React.createElement(ApolloProvider, {
    client
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, " Pokedex "), /* @__PURE__ */ React.createElement(PokemonContainer, null)));
}
export default App;
