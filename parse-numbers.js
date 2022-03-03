function parseNmbers(...x) {
	const parsed = [];
	x.forEach((x) => {
		if (!isNaN(x)) {
			parsed.push(Number(x));
		}
	});
}

console.log(parseNmbers("15", "34", "12"));
