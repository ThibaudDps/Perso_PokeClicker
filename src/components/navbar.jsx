import "../styles/navbar.css";

function Navbar({
  pokemonIndex,
  handleClickPrecedent,
  handleClickSuivant,
  maxIncrement,
}) {
  return (
    <div className="navBar">
      <button onClick={handleClickPrecedent}>◂</button>{" "}
      <button onClick={handleClickSuivant}>▸</button>
    </div>
  );
}

export default Navbar;
