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
