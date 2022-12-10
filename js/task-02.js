const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listOfIngredients = document.querySelector("#ingredients");

const element = ingredients.map(ingredient => {
	const liElement = document.createElement("li");
	liElement.textContent = ingredient;
	liElement.classList.add("item");
	return liElement;
});
listOfIngredients.append(...element);
