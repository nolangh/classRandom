/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
	const div = arr.length;
	let pos = 0;
	let neg = 0;
	let zero = 0;
	for (let x of arr) {
		if (x > 0) {
			pos += 1;
		} else if (x < 0) {
			neg += 1;
		} else {
			zero += 1;
		}
	}
	console.log(pos);
}
