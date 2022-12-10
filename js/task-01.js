const listItemsOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listItemsOfCategories.length);

listItemsOfCategories.forEach(listItem => {
	console.log("Category:", listItem.firstElementChild.textContent);

	const itemsCounting = listItem.lastElementChild.querySelectorAll("li").length;
	console.log("Eleents:", itemsCounting);
});
