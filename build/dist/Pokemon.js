import React from "../_snowpack/pkg/react.js";
export function Pokemon({pokemon}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "pokemon"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pokemon__name"
  }, /* @__PURE__ */ React.createElement("p", null, pokemon.name)), /* @__PURE__ */ React.createElement("div", {
    className: "pokemon__meta"
  }, /* @__PURE__ */ React.createElement("span", null, pokemon.maxHP), /* @__PURE__ */ React.createElement("span", null, pokemon.maxCP)), /* @__PURE__ */ React.createElement("div", {
    className: "pokemon__image"
  }, /* @__PURE__ */ React.createElement("img", {
    src: pokemon.image,
    alt: pokemon.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pokemon__attacks"
  }, pokemon.attacks.special.slice(0, 3).map((attack) => /* @__PURE__ */ React.createElement("span", {
    key: `${attack.name}-${attack.damage}`
  }, attack.name))));
}
