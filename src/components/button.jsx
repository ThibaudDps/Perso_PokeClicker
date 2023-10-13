import "../styles/Button.css";

const Button = ({ count, setCount }) => {
  return (
    <div className="button-train">
      <button onClick={() => setCount(count + 1)}>TRAIN</button>
    </div>
  );
};

export default Button;
