const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients=document.querySelector('#ingredients');

// let markup='';
// console.log(markup);

// console.log(ingredients.length);
// for (let i = 0; i < ingredients.length; i+=1) {
// markup += `<li>${ingredients[i]}</li>`
 
// }

// console.log(markup);
// listOfIngredients.insertAdjacentHTML('beforeend',markup)

 const element=ingredients.map(ingredient=>{
   const liElement=document.createElement('li');
         liElement.textContent=ingredient;
         liElement.classList.add('item');
  return liElement;
 })
 listOfIngredients.append(...element)
