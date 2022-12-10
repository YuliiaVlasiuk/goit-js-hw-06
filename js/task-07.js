const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
// console.dir(span);

span.style.fontSize = `${input.value}px`;
// console.log(span.style.fontSize);

input.addEventListener("input", onInput);

function onInput(evt) {
	// console.dir(evt.currentTarget.value)
	span.style.fontSize = `${evt.currentTarget.value}px`;
}
