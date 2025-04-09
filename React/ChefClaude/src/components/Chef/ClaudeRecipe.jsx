import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section className="chef-response">
      <h2>Suggested recipe:</h2>
      {/* <article className="suggested-recipe-container" aria-live="polite">
        <p>
          Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is
          the recipe:
        </p>
        <h3 className="recipe-name">Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul className="suggested-ingredients">
          <li>Salt and pepper to taste</li>
          <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <h4 className="suggested-instructions">Instructions:</h4>
        <ol className="instruction-set">
          <li>Bring a large pot of salted water to a boil for the pasta.</li>
          <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
      </article> */}
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
      {/* <article className="suggested-recipe-container" aria-live="polite" dangerouslySetInnerHTML={{ __html: props.recipe }} /> */}
    </section>
  );
}
