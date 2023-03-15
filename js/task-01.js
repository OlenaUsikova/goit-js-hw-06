const itemsOfListWithIdEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${itemsOfListWithIdEl.length}`);

console.log(itemsOfListWithIdEl);

[...itemsOfListWithIdEl].forEach((item) => 
{ console.log(`Category: ${item.querySelector('h2').textContent}`);
console.log(item)
console.log(`Elements: ${item.querySelector('ul').children.length}`);
})

