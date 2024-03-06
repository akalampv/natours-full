// console.log(arguments);
// console.log(require('module').wrapper);

// Module exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// Exports
// const calc2 = require('./test-module-2');
// console.log(calc2.add(2, 5));
// console.log(calc2.multiply(2, 5));
// console.log(calc2.divide(2, 5));
// console.log(calc2.subtract(2, 5));

const { add, multiply, divide, subtract } = require('./test-module-2');
console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(divide(2, 5));
console.log(subtract(2, 5));

// Caching
require('./test-module-3')();
require('./test-module-3')();
