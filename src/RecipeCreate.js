import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleCreateRecipe = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      rating: rating,
      ingredients: ingredients,
      preparation: preparation
    };
    const newRecipes = [...recipes, newRecipe];
    setRecipes(newRecipes);
    setName("");
    setCuisine("");
    setPhoto("");
    setRating("");
    setIngredients("");
    setPreparation("");
  }

  return (
    <form name="create" onSubmit={handleCreateRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </td>
            <td>
              <input type="text" name="cuisine" placeholder="Cuisine" value={cuisine} onChange={(event) => setCuisine(event.target.value)} />
            </td>
            <td>
              <input type="url" name="photo" placeholder="URL" value={photo} onChange={(event) => setPhoto(event.target.value)} />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" value={preparation} onChange={(event) => setPreparation(event.target.value)} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
