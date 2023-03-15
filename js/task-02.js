const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




let list = []

// ingredients.map((ingredient, i) => {
    
    // 
		// list += `<li>${ingredient}</li>`})

ingredients.forEach((ingredient, i) => {
  const itemIngredientsEl = document.createElement('li')
  itemIngredientsEl.classList.add("item")
  itemIngredientsEl.textContent = ingredients[i]
  list.push(itemIngredientsEl)
})
//     console.log(list)



  const listEl = document.querySelector("#ingredients");
  // listEl.insertAdjacentHTML("afterbegin", list)

  listEl.append(...list)