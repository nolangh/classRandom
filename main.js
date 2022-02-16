<<<<<<< HEAD
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
=======
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
>>>>>>> 84a8b02ce9c67002dd1397933e5e15ec20a65e31
