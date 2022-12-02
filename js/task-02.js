const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ingredientsList = document.createElement("li");
  ingredientsList.textContent = [ingredient];
  ingredientsList.classList.add("item");

  const ingredientsEl = document.querySelector("#ingredients");
  ingredientsEl.append(ingredientsList);
  console.log(ingredientsList);
}
