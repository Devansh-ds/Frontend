export default function Joke(prop) {
  return (
    <article className="joke">
      {prop.setup && (
        <div className="setup">
          <h1>Setup: {prop.setup}</h1>
        </div>
      )}
      <div className="punchline">
        <h4>Punchline: {prop.punchline}</h4>
      </div>
    </article>
  );
}
