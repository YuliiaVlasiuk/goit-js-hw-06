const input = document.querySelector("#validation-input");

// console.log(input.getAttribute("data-length"));

console.dir(input);

input.addEventListener("blur", onBlur);

function onBlur(evt) {
	const currentInputLength = evt.currentTarget.value.length;
	// console.dir(currentInputLength);

	if (currentInputLength == input.getAttribute("data-length")) {
		evt.currentTarget.classList.add("valid");
		evt.currentTarget.classList.remove("invalid");
	} else {
		evt.currentTarget.classList.add("invalid");
		evt.currentTarget.classList.remove("valid");
	}
}
