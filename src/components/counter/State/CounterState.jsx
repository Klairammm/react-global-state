import { useState } from "react";
import style from "./style.module.scss";

const CounterState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={style.main}>
      <h2>Counter with useState</h2>
      <div className={style.btn}>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p> Count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </div>
  );
};

export default CounterState;
