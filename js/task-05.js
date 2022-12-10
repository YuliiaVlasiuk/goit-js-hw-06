const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// console.log(input);
// console.dir(output);

input.addEventListener("input", onInput);

function onInput(evt) {
	// console.log(evt.currentTarget.value);
	const value = evt.currentTarget.value;
	if (!value) {
		output.textContent = "Anonymous";
	} else output.textContent = value;
}
