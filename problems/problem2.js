/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. 
 * 
 * https://projecteuler.net/problem=2
 */
const maxNum = 4000000;
let sum = 0;

let term1 = 1;
let term2 = 2;

while (term2 <= maxNum) {
  if (term1 % 2 === 0) sum += term1;
  if (term2 % 2 === 0) sum += term2;

  term1 = term1 + term2;
  term2 = term2 + term1;
}

console.log(sum);
