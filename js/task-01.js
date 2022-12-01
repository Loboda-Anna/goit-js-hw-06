const categoriesList = document.querySelectorAll(".item");

const itemNumber = categoriesList.length;
console.log(`Number of categories: ${itemNumber}`);

for (const category of categoriesList) {
  const headingEl = category.firstElementChild;
  console.log(`Category: ${headingEl.textContent}
Elements: ${headingEl.nextElementSibling.children.length} `);
}
