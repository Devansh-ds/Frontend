import React from "react";

const ingList = ["Chicken", "Oregano", "Tomatoes"];

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

  return (
    <main className="chef-main">
      <form className="chef-form" onSubmit={submitForm}>
        <input type="text" name="new-ingredient" id="input" placeholder="e.g. oregano" />
        <button className="chef-form-button" type="submit">
          + Add ingredient
        </button>
      </form>
      <div className="ingredients-container">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">{ingredientsList}</ul>
      </div>
    </main>
  );

  function deleteIngredient(indexToDelete) {
    setIngredients((prev) => prev.filter((_, index) => index != indexToDelete));
  }

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("new-ingredient");

    event.currentTarget[0].value = "";

    if (newIngredient) {
      let newArr = [...ingredients, newIngredient];
      setIngredients((list) => [...new Set(newArr)]);
    }
  }
}
