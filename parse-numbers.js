<<<<<<< HEAD
function parseNumbers() {}
=======
function parseNmbers(...x) {
	const parsed = [];
	x.forEach((x) => {
		if (!isNaN(x)) {
			parsed.push(Number(x));
		}
	});
	return parsed;
}

console.log(parseNmbers("15", "34", "12"));
>>>>>>> 227326245800e4e8c4a4a02f06a7710dcd4906d7
