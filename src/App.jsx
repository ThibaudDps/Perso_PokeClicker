import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Button from "./components/button";
import Navbar from "./components/navbar";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };
  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      {count}🍩
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Button />
      <Navbar
        pokemonIndex={pokemonIndex}
        handleClickPrecedent={handleClickPrecedent}
        handleClickSuivant={handleClickSuivant}
        maxIncrement={pokemonList.length - 1}
      />
    </div>
  );
}

export default App;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/1.gif",
  },
  {
    name: "charmander",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/4.gif",
  },
  {
    name: "squirtle",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/7.gif",
  },
  {
    name: "pikachu",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/25.gif",
  },
  {
    name: "scyther",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/123.gif",
  },
];
