const input = document.getElementById("phone");
const reg = /\(?\d{3}\)?\d{3}\d{4}/g;

function phoneNumber() {
	let result = reg.test(input);
	if ((result = "true")) {
		console.log(result);
		return alert("true");
	}
	return alert("false");
}
