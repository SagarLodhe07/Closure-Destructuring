// 5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
// calling the remove item closure function, the specified productId item must be removed from cartItems
// array.Use javascript closures to achieve the output.

shoppingCart = () => {
  let cart = [];
  /**
   * Add To Cart Function
   */
  addToCart = (productId, name, price, quantity) => {
    let exisItem = cart.findIndex((item) => item.productId === productId);

    if (exisItem !== -1) {
      cart[exisItem].quantity++;
    } else {
      cart.push({
        productId: productId,
        name: name,
        price: price,
        quantity: quantity,
      });
    }
  };

  addItem = (product) => {
    addToCart(product.id, product.name, product.price, 1);
  };

  removeItem = (productId) => {
    let exisItem = cart.findIndex((item) => item.productId === productId);
    if (exisItem !== -1) {
      cart.splice(exisItem, 1);
    }
  };
  getCartItem = () => {
    return cart;
  };
  return {
      addItem: addItem,
      removeItem:removeItem,
      getCartItem: getCartItem,
  };
};
/************************************************************** */
const cart = shoppingCart();
console.log("Cart Items", cart.getCartItem());

const product1 = { id: 1, name: "Product 1", price: 10 };
const product2 = { id: 2, name: "Product 2", price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
cart.addItem(product1);

console.log("Cart Items", cart.getCartItem());

cart.removeItem(2);

console.log("Cart After Remove Product", cart.getCartItem());
