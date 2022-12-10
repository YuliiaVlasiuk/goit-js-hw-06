function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let step = 10;

const mainDiv = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const counter = document.querySelector("input");

create.addEventListener("click", onCreate);
destroy.addEventListener("click", onDestroy);

function onCreate(evt) {
	let divWidth = 30;
	let divHeight = 30;

	const counerAddDiv = counter.value;
	const elements = [];
	for (let i = 1; i <= counerAddDiv; i += 1) {
		const div = document.createElement("div");
		div.style.width = `${divWidth}px`;
		div.style.height = `${divHeight}px`;
		div.style.backgroundColor = getRandomHexColor();
		div.textContent = i; 
		divWidth += step;
		divHeight += step;
		elements.push(div);
	}
	mainDiv.append(...elements);
}

function onDestroy() {
	const elements = [];
	mainDiv.innerHTML = elements;
	counter.value = "";
}
