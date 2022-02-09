//const input = document.getElementById("inpt");
//const outpt = document.getElementById("output");
//const button = document.getElementById("btn");

//const morning = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//const afterNoon = [13, 14, 15, 16];
//const evening = [17, 18, 19];
//const night = [20, 21, 22, 23, 24, 25];

const outPut = {
  gm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ga: [13, 14, 15, 16],
  ge: [17, 18, 19],
  gn: [20, 21, 22, 23, 24, 25],
};

/* ------------------------ timeValue = input.value; ------------------------ */

function timeLoop(x) {
  for (time of outPut.gm) {
    if (x === time) {
      return "Good Morning";
    }
  }
}

console.log(timeLoop(9));
