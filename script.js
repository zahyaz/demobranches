// Boilerplate code for a JavaScript file

// Function to initialize the script
function init() {
  console.log("Script initialized");
}

// Call the init function when the script loads
init();

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    console.error("Division by zero is not allowed");
    return null;
  }
  return a / b;
}
