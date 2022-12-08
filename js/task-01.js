
const listItems = document.querySelectorAll('.item');
console.log("Number of categories:",listItems.length);

const listH2 = document.querySelectorAll('h2');

listH2.forEach((itemH2) => {
    console.log(itemH2.textContent);
  });

const children=listItems.children;
  console.log(children)




// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3