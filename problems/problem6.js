/**
 * The sum of the squares of the first ten natural numbers is,
 * 
 * The square of the sum of the first ten natural numbers is,
 * 
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
 *  
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. 
 * 
 * https://projecteuler.net/problem=6
 * 
 */

let sumOfSquares = 0;
let naturalNumSum = 0;
let squareOfSums = 0;

for (let num = 1; num <= 100; num += 1) {
  sumOfSquares += Math.pow(num, 2);
  naturalNumSum += num;
}

squareOfSums = Math.pow(naturalNumSum, 2);

console.log(squareOfSums - sumOfSquares);
