/* ------------- const input = Document.getElementById("inpt"); ------------- */
/* ------------ const output = Document.getElementById("output"); ----------- */
/* ------------- const button = Document.getElementById("btn"); ------------- */

const morning = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const afterNoon = [13, 14, 15, 16];
const evening = [17, 18, 19];
const night = [20, 21, 22, 23, 24, 25];

function time(x) {
  /* ------------------------ timeValue = input.value; ------------------------ */
  for (const t of morning) {
    if (x === t) {
      return "Good Morning";
    }
    console.log(time(9));
  }
}
