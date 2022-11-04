import { add, divide, multiply, subtract } from "./utils/calc.js";
import greet from "./utils/greet.js";

console.log(`20 + 10 = ${add(20, 10)}`);
console.log(`20 * 10 = ${multiply(20, 10)}`);
console.log(`20 - 10 = ${subtract(20, 10)}`);
console.log(`20 / 10 = ${divide(20, 10)}`);

console.log(greet);
