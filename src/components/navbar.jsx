function Navbar({
  pokemonIndex,
  handleClickPrecedent,
  handleClickSuivant,
  maxIncrement,
}) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrecedent}>Précedent</button>
      ) : null}{" "}
      {pokemonIndex < maxIncrement ? (
        <button onClick={handleClickSuivant}>Suivant</button>
      ) : null}
    </div>
  );
}

export default Navbar;
