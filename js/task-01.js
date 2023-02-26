const sumOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${sumOfCategories.length}`);

const titleText = document.querySelectorAll('li.item');

titleText.forEach(element => {
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
});
