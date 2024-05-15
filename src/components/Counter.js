import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //useSelector - hook that gives us access to the pice of store (slise). Function inside of hook is executed by redux!!!
  // you always have the latest counter
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  //hook returns a function
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const startFromScratchineHandler = () => {
    dispatch({ type: "set to 0" });
  };

  //action payload - its an extra property, that you add to your actions object (amount in our case)
  const incriseHandler = () => {
    dispatch({ type: "increase", amount: parseInt(amount) });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter:)</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incriseHandler}>Increase by {amount}</button>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={startFromScratchineHandler}>From Scratch</button>
    </main>
  );
};

export default Counter;
