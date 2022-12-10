const form = document.querySelector(".login-form");

// console.dir(form);

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
	evt.preventDefault();

	const {
		elements: { email, password },
	} = evt.currentTarget;

	if (!email.value || !password.value) {
		alert("Attention, all fields must be filled!!.");
	} else {
		const result = {
			email: email.value,
			password: password.value,
		};
		console.log(result);
		evt.currentTarget.reset();
	}
}
