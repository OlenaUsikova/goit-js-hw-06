const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = [];

ingredients.forEach((ingredient, i) => {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = ingredients[i];
  list.push(itemIngredientsEl);
});
listEl.append(...list);
