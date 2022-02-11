//const input = document.getElementById("inpt");
//const outpt = document.getElementById("output");
//const button = document.getElementById("btn");

//const morning = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//const afterNoon = [13, 14, 15, 16];
//const evening = [17, 18, 19];
//const night = [20, 21, 22, 23, 24, 25];

/* const outPut = {
  gm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ga: [13, 14, 15, 16],
  ge: [17, 18, 19],
  gn: [20, 21, 22, 23, 24, 25],
};


function timeLoop(x) {
  for (time of outPut.gm) {
    if (x === time) {
      return "Good Morning";
    }
  }
}

console.log(timeLoop(9));
*/

/*const cars = ["Ford", "Chevy", "Merc"];

for (let i = 0; i < cars.length; i++) {
  text = "<li>" + cars[i] + "</li>";
} */

/* function combo(a, b) {
  let resultArray = [];
  for (let i = 0; i < a.length; i++) {
    resultArray.push(a[i] * b[i]);
  }

  return resultArray;
}

let answerArray = combo([1, 2, 3, 4], [5, 6, 7, 8]);
console.log(answerArray);

const newArray = (array1, array2) => array1.map((item, i) => item * array2[i]);
console.log(newArray([1, 2, 3, 4], [2, 3, 4, 5]));
*/

const array1 = [1, 2, 3, 4, 5];

const sqrArray = array1.map((i) => Math.pow(i));

console.log(sqrArray);

const arrayOfObjects = [
  { a: 1, b: 2, c: 3 },
  { e: 4, f: 5, g: 6 },
  { h: 7, i: 8, j: 9 },
];
