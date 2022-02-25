/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
	let sum = 0;
	for (let x in ar) {
		sum += ar[x];
	}
	return sum;
}
