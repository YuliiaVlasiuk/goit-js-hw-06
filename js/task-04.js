const buttonDecrement = document.querySelector('button[data-action="decrement"]');

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

//  console.log(buttonDecrement);
//  console.log(buttonIncrement);
//  console.log(counterValue.textContent);

buttonDecrement.addEventListener("click", Decrement);

function Decrement() {
	counterValue.textContent = Number(counterValue.textContent) - 1;
}
buttonIncrement.addEventListener("click", Increment);

function Increment() {
	counterValue.textContent = Number(counterValue.textContent) + 1;
}
