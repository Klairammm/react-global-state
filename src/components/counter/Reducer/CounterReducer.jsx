import { useReducer } from "react";
import style from "./style.module.scss";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return "Error";
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={style.main}>
      <h2>Counter with useReducer</h2>
      <div className={style.btn}>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <p> Count is {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
    </div>
  );
};

export default CounterReducer;
