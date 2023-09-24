// let num1 = 'shakil ';
// let num2 = 'vhai';
// const fullName =num1.concat( num2);
// console.log(fullName);
const names = ['shakil','rana','mahatab','kawser'];
const results=Array.isArray(names)
console.log(results);
//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits);
console.log(result);
//
// Example 1: Check if a variable is an array
const myArray = [1, 2, 3];
const isItArray = Array.isArray(myArray);
console.log(isItArray); // Output: true

// Example 2: Check if a non-array variable is an array
const myNonArray = 'Hello';
const isItArray2 = Array.isArray(myNonArray);
console.log(isItArray2); // Output: false
