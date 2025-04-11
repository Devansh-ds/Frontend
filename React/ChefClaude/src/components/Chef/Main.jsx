import "../../index.css";

import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai";
import { useEffect } from "react";

const ingList = ["Oregano", "Tomatoes", "Potato", "Rice", "Wheat", "All spices", "cheese"];

export default function Main() {
  let [ingredients, setIngredients] = React.useState(ingList);

  let ingredientsList = ingredients.map((item, index) => {
    return (
      <li key={index} className="list-item">
        <h4>{item}</h4>
        <button onClick={() => deleteIngredient(index)}>Delete</button>
      </li>
    );
  });

  let [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);
  console.log(recipeSection);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe, recipeSection.current]);

  return (
    <main className="chef-main">
      <form action={submitForm} className="chef-form">
        <input type="text" name="new-ingredient" id="input" placeholder="e.g. oregano" />
        <button className="chef-form-button" type="submit">
          + Add ingredient
        </button>
      </form>
      {ingredientsList.length > 0 && (
        <IngredientsList ref={recipeSection} getARecipe={getARecipe} recipeShown={recipe} ingredientsList={ingredientsList} />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );

  function deleteIngredient(indexToDelete) {
    setIngredients((prev) => prev.filter((_, index) => index != indexToDelete));
  }

  function submitForm(formData) {
    const newIngredient = formData.get("new-ingredient");

    if (newIngredient) {
      let newArr = [...ingredients, newIngredient];
      setIngredients((list) => [...new Set(newArr)]);
    }
  }

  async function getARecipe() {
    console.log(ingredientsList);
    const generatedRecipeMd = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipeMd);
  }
}
