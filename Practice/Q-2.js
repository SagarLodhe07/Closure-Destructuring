// 2. You have an object representing a customer order with properties orderId, productName, and quantity.
// Use destructuring to extract and print these properties.

let order = {
  orderId: "123456",
  productName: "Laptop",
  Quantity: 1,
};

/**
 * Destructuring
 */

const { Quantity, productName, orderId } = order;

console.log(Quantity);
console.log(orderId);
console.log(productName);