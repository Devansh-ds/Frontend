import React from "react";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function minus() {
    setCount((prev) => prev - 1);
  }

  function plus() {
    setCount((prev) => prev + 1);
  }

  console.log("App render")

  return (
    <main className="count-container">
      <div className="counter">
        <button onClick={minus} aria-label="Decrease amount" className="minus">
          -
        </button>
        <Count countNumber={count} />
        <button onClick={plus} aria-label="Increase amount" className="plus">
          +
        </button>
      </div>
    </main>
  );
}
