import React, { useReducer } from "react";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h4>useReducer(Counter)</h4>
          <Button
            variant="dark"
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            decrease
          </Button>
          <span className="mx-4 fw-bold fs-4">{state.counter}</span>
          <Button
            variant="dark"
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            increase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterReducer;
