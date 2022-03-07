<<<<<<< HEAD
function parseNmbers(...x) {
=======
function parseNumber(...x) {
>>>>>>> 04cc3450f85cb4649dc965e5220fe8a6f8c1380f
	const parsed = [];
	x.forEach((x) => {
		if (!isNaN(x)) {
			parsed.push(Number(x));
		}
	});
	return parsed;
}

<<<<<<< HEAD
console.log(parseNmbers("15", "34", "12"));
=======
console.log(parseNumber("15", "34", "12"));
console.log(parseNumber("ty", "0p", "yu", "9L"));
>>>>>>> 04cc3450f85cb4649dc965e5220fe8a6f8c1380f
