/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 * return the number of items in the array where x == y
 */

function getCount(objects) {
	let total = "";
	for (let x of objects) {
		if (x == objects[x]) {
			total += 1;
		}
		console.log(
			getCount([
				[1, 2],
				[1, 1],
				[2, 4],
				[4, 4],
			])
		);
	}
}
