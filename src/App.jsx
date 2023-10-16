import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ListPkmn from "./components/ListPkmn";

function App() {
  const [pokemonTeamIndex, setPokemonTeamIndex] = useState(0);
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    } else if (pokemonTeamIndex > 0) {
      setPokemonTeamIndex(pokemonTeamIndex - 1);
      setPokemonIndex(pokemonList[pokemonTeamIndex - 1].length - 1);
    }
  };

  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList[pokemonTeamIndex].length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    } else if (pokemonTeamIndex < pokemonList.length - 1) {
      setPokemonTeamIndex(pokemonTeamIndex + 1);
      setPokemonIndex(0);
    }
  };

  const handleImageChange = () => {
    if (count >= 4) {
      if (pokemonIndex < pokemonList[pokemonTeamIndex].length - 1) {
        setPokemonIndex(pokemonIndex + 1);
      } else if (pokemonTeamIndex < pokemonList.length - 1) {
        setPokemonTeamIndex(pokemonTeamIndex + 1);
        setPokemonIndex(0);
      }
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div className="affichage">
        <ListPkmn
          pokemonList={pokemonList[pokemonTeamIndex]}
          selectedPokemonIndex={pokemonIndex}
          setSelectedPokemonIndex={setPokemonIndex}
        />
        <PokemonCard pokemon={pokemonList[pokemonTeamIndex][pokemonIndex]} />
        {" LEVEL "}
        {count}
      </div>
      <div className="input">
        <Navbar
          pokemonIndex={pokemonIndex}
          handleClickPrecedent={handleClickPrecedent}
          handleClickSuivant={handleClickSuivant}
          maxIncrement={pokemonList[pokemonTeamIndex].length - 1}
        />
        <Button
          count={count}
          setCount={handleImageChange}
          images={pokemonList[pokemonTeamIndex]}
        />
      </div>
    </div>
  );
}
export default App;

const pokemonList = [
  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_152.gif",
      name: "chikorita",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/152.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_153.gif",
      name: "bayleef",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/153.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_154.gif",
      name: "meganium",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/154.gif",
    },
  ],
  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_155.gif",
      name: "cyndaquil",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/155.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_156.gif",
      name: "Quilava",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/156.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_157.gif",
      name: "typhlosion",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/157.gif",
    },
  ],
  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_158.gif",
      name: "totodile",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/158.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_159.gif",
      name: "croconaw",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/159.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_160.gif",
      name: "feraligatr",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/160.gif",
    },
  ],
  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_246.gif",
      name: "larvitar",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/246.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_247.gif",
      name: "pupitar",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/247.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_248.gif",
      name: "tyranitar",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/248.gif",
    },
  ],

  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_123.gif",
      name: "scyther",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/123.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_212.gif",
      name: "scyzor",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/212.gif",
    },
  ],
  [
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_041.gif",
      name: "zubat",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/41.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_042.gif",
      name: "golbat",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/42.gif",
    },
    {
      icon: "https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_old/ico-a_old_169.gif",
      name: "crobat",
      imgSrc: "https://bluemoonfalls.com/images/sprites/crystal/normal/169.gif",
    },
  ],
];
