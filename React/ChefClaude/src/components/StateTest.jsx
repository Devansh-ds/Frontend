import React from "react";

export function StateLearn() {
  let [isImp, setIsImp] = React.useState("Yes");

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">
        {isImp}
      </button>
    </main>
  );

  function handleClick() {
    setIsImp(function () {
      return isImp === "Yes" ? "No" : "Yes";
    });
  }
}

export function StateCounter() {
  let [count, setCount] = React.useState(0);

  return (
    <main className="state-container">
      <h1>How many times I will say "state" in this section?</h1>
      <div className="state-counter">
        <button onClick={handleMinusCounter} className="state-minus" aria-label="Decrease count">
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={handlePlusCounter} className="state-plus" aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );

  function handleMinusCounter() {
    setCount(function (prevCount) {
      if (prevCount == 0) {
        return prevCount;
      }
      return prevCount - 1;
    });
  }

  function handlePlusCounter() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }
}
