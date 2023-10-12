import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <div>
      <figure>
        <img
          className="iconPkmn"
          src="https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_gbc/ico-a_2_100.gif"
        />
        <h2>{pokemon.name.toUpperCase()}</h2>
        {pokemon.imgSrc ? (
          <img className="imgPkmn" src={pokemon.imgSrc} />
        ) : (
          <p>???</p>
        )}
      </figure>
    </div>
  );
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
