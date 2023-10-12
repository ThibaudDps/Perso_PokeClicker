import "../styles/Button.css";

const Button = ({ count, setCount }) => {
  return (
    <div className="button_top">
      <button onClick={() => setCount(count + 1)}>TRAIN</button>
    </div>
  );
};

export default Button;
