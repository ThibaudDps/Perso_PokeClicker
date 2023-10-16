import React from "react";
import "../styles/listpkmn.css";

function ListPkmn({
  pokemonList,
  selectedPokemonIndex,
  setSelectedPokemonIndex,
}) {
  return (
    <div className="listpkmn">
      <h3>EVOLUTION</h3>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li
            key={pokemon.icon}
            onClick={() => setSelectedPokemonIndex(index)}
            className={index === selectedPokemonIndex ? "selected" : ""}
          >
            <img src={pokemon.icon} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPkmn;
