import { useState } from "react";
import React from "react";

export default function FetchData() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = React.useState(1);

  console.log("Rendered");

  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch("https://swapi.dev/api/people/" + count)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
