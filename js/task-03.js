const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfImage=document.querySelector('.gallery');
console.log(listOfImage);

 console.log(images);

// let markup='';
// console.log(markup);

// console.log(ingredients.length);
// for (let i = 0; i < ingredients.length; i+=1) {
// markup += `<li>${ingredients[i]}</li>`
 
// }

// // console.log(markup);
// // listOfIngredients.insertAdjacentHTML('beforeend',markup)

const markup=images.map(({url,alt})=>
 `<li><img src="${url}" alt="${alt}" class="image"></li>`).join('')
 console.log(markup);
  //   const imageItem=document.createElement('img');

  //         imageItem.src=image.url;
  //         imageItem.alt=image.alt;
  //         console.log(imageItem);
  //    return imageItem;
  // });
   

  listOfImage.insertAdjacentHTML('beforeend',markup);
