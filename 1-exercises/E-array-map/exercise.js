// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5, 0.9];

const multiplyBy100WithMap = (array) => array.map((num) => num * 100);
console.log(multiplyBy100WithMap(numbers));

// different syntax
const multiplyBy100 = (num) => num * 100;
const multiplied = numbers.map(multiplyBy100);
console.log(multiplied);
