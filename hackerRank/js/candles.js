/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
	let total = 0;
	let sorted = candles.sort(function (a, b) {
		return b - a;
	});
	for (let x of sorted) {
		if (x == sorted[0]) {
			total += 1;
		}
	}
	return total;
}
