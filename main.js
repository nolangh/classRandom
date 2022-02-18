/* let cart = (function () {
function length(...word) {
  let longestWord = "";
  for (let i = 0; i < word.length; i++) {
    if (longestWord.length < word[i].length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}
console.log(length("the", "dog", "has", "fleas"));

function fact(n) {
  
}
let cart = (function () {
  let cartItems = []; //product structure { name:"name", price:10.00}
  let cartTotal = 0;
  return {
    getTotal: function () {
      return cartTotal;
    },
    getItems: function () {
      return cartItems;
    },
    getItemsCount: function () {
      cartItems.length;
    },
    addItem: function (item) {
      cartItems.push;
      cartTotal += item.price;
    },
    removeItem: function (item) {
      cartItem = cartItems.filter((anItem) => anItem.name != item.name);
      carTotal -= item.price;
    },
  };
})();
*/

/* const list = []; // set an empty array

function add() {
  const input = document.getElementById("itemInput").value; //this grabs the value from the input
  console.log(input);
  list.push(input); // this adds the
  displayList(); //this calls displayList function
}

function displayList() {
  let itemList = ""; //This function loops through the array "list" and displays the li
  list.forEach((item) => (itemList += `<li>${item}</li>`));
} */

// TODO: work on classes. slide to note start at #16

class lists {
  constructor(name, id, tasks) {
    this.name = name;
    this.id = id;
    this.tasks = tasks;
  }
  addTask() {}
  rename() {}
}

class Tasks {
  constructor() {}
}
