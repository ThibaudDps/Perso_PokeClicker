import React from "react";

const Button = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>TRAIN</button>
    </div>
  );
};

export default Button;
