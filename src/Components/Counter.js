import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    setCounter(counter - 1);
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="mt-5 text-center">
        <h4>useState(Counter)</h4>
        <Button variant="dark" onClick={decrease}>
          decrease
        </Button>
        <span className="mx-4 fw-bold fs-4">{counter}</span>
        <Button variant="dark" onClick={increase}>
          increase
        </Button>
      </div>
    </>
  );
};

export default Counter;
