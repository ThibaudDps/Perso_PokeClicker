function Navbar({
  pokemonIndex,
  handleClickPrecedent,
  handleClickSuivant,
  maxIncrement,
}) {
  return (
    <div className="navBar">
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrecedent}>◂</button>
      ) : null}{" "}
      {pokemonIndex < maxIncrement ? (
        <button onClick={handleClickSuivant}>▸</button>
      ) : null}
    </div>
  );
}

export default Navbar;
