// 1. You are building a counter application that tracks the number of times a button is clicked. Implement the
// counter using closure.

counterApp = () => {
  let count = 1;
  return () => {
    console.log(`button clicked ${count++} of times`);
  };
};

const counter = counterApp()
counter()
counter()
counter()
