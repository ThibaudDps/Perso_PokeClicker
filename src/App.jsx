import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ListPkmn from "./components/ListPkmn";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handleImageChange = () => {
    if (count >= 9) {
      setPokemonIndex((prevIndex) =>
        prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0
      );
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="affichage">
        <ListPkmn
          pokemonList={pokemonList}
          selectedPokemonIndex={pokemonIndex}
          setSelectedPokemonIndex={setPokemonIndex}
        />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {count}{" "}
      </div>
      <div className="input">
        <Navbar
          pokemonIndex={pokemonIndex}
          handleClickPrecedent={handleClickPrecedent}
          handleClickSuivant={handleClickSuivant}
          maxIncrement={pokemonList.length - 1}
        />
        <Button
          count={count}
          setCount={handleImageChange}
          images={pokemonList}
        />
      </div>
    </div>
  );
}
export default App;

const pokemonList = [
  {
    icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_001.gif",
    name: "bulbasaur",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/1.gif",
  },
  {
    icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_004.gif",
    name: "charmander",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/4.gif",
  },
  {
    icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_007.gif",
    name: "squirtle",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/7.gif",
  },
  {
    icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_025.gif",
    name: "pikachu",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/25.gif",
  },
  {
    icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_123.gif",
    name: "scyther",
    imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/123.gif",
  },
];
