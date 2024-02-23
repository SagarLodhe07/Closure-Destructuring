// 4. Continuing the previous coding challenge, now let’s implement the add to cart feature. On calling add to
// cart closure function, the object of productId, name, quantity and price should be added to the cartItem.
// Note that if duplicate items with same prouductId is added, the product quantity must be incremented. Use
// javascript closures to achieve the output.

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
  getCartItem = () => {
    return cart;
  };
  return {
    getCartItem: getCartItem,
    addItem: addItem,
  };
};

const cart = shoppingCart();
console.log("Cart Items", cart.getCartItem());

const product1 = { id: 1, name: "Product 1", price: 10 };
const product2 = { id: 2, name: "Product 2", price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product2);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items", cart.getCartItem());
