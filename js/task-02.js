const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrList = document.querySelector('#ingredients')
const ingredient = ingredients.forEach((item) => {
  const ingrListItem = document.createElement("li");
  ingrListItem.textContent = item;
  ingrListItem.classList.add('item')
  ingrList.append(ingrListItem)
});