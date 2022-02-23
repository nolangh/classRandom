/*For this exercise, create regex that will allow the user to enter a phone number. 
When the user presses the "Validation" button, the script checks the validity of the number. 
If the number is valid (matches the character sequence specified by the regular expression), 
the script shows a message thanking the user and confirming the number. If the number is invalid, 
the script informs the user that the phone number is not valid.
 */

const input = document.getElementById("phone", value);
const test = /\(?\d{3}\)?\?:( |-)\d{3}\-?\d{4}/;

function phoneNumber() {
	let num = test.exec(input);
	if (ran == true) {
		alert("true");
	}
	alert("false");
}
