function parseNumber(...x) {
	const parsed = [];
	x.forEach((x) => {
		if (!isNaN(x)) {
			parsed.push(Number(x));
		}
	});
	return parsed;
}

console.log(parseNumber("15", "34", "12"));
console.log(parseNumber("ty", "0p", "yu", "9L"));
