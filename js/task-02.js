const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsEl = ingredients => {
  return ingredients.map(element => {
    const itemEl = document.createElement('li');

    itemEl.classList.add('item');
    itemEl.textContent = element;

    return itemEl;
  });
};
ingredientsListEl.append(...makeIngredientsEl(ingredients));
