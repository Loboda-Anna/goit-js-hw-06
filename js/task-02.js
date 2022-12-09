const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
let ingredientList = [];

for (const ingredient of ingredients) {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = [ingredient];
  ingredientEl.classList.add("item");
  ingredientList.push(ingredientEl);
}

ingredientsEl.append(...ingredientList);
