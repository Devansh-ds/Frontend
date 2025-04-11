export default function IngredientsList(props) {
  return (
    <section>
      <div className="ingredients-container">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">{props.ingredientsList}</ul>
      </div>
      {!props.recipeShown && props.ingredientsList.length > 2 && (
        <div className="recipe-ready">
          <div ref={props.ref} className="recipe-ready-text">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getARecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
