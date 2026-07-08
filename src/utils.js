// Utility functions

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

const formatDate = (date) => {
  if (!(date instanceof Date)) throw new Error('Invalid date');
  return date.toISOString().split('T')[0];
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  formatDate,
};
