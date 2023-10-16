import "../styles/Button.css";

const Button = ({ count, setCount }) => {
  return (
    <div className="button-train">
      <button onClick={() => setCount(count + 1)}>A</button>
    </div>
  );
};

export default Button;
