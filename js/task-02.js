const list = document.querySelector('#ingredients');
console.log(list);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = ingredients.map(name => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = name;
  return li;
})
console.log(items)
list.append(...items);