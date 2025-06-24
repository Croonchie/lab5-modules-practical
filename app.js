// app.js
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

// Test math functions
console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(10, 4));
console.log('Multiply: ', multiply(4, 5));

// Test string functions
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('WORLD'));

// Test array functions
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Test combined function
addAndLogUpper(10, 20);

// Final Challenge
const numbers = [10, 20, 30, 40];
const maxNumber = findMax(numbers);
const multipliedResult = multiply(maxNumber, 2);
const finalResult = toUpperCase(multipliedResult.toString());

console.log('Final Challenge Result: ', finalResult);
