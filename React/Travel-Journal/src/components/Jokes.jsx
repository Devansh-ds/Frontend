import React from "react";

const temp = false;
export default function Joke(prop) {
  const [isShown, setIsShown] = React.useState(temp);

  return (
    <article className="joke">
      {prop.setup && (
        <div className="setup">
          <h1>Setup: {prop.setup}</h1>
        </div>
      )}
      <div className="punchline">{!prop.setup ? <h4>Punchline: {prop.punchline}</h4> : isShown && <h4>Punchline: {prop.punchline}</h4>}</div>

      {prop.setup && <button onClick={toggleShown}>{!isShown ? "Show" : "Hide"} punchline</button>}
    </article>
  );

  function toggleShown(event) {
    setIsShown((prevShown) => !prevShown);
  }
}
