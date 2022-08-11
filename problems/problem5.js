/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * 
 * https://projecteuler.net/problem=5
 * 
 */

let number = 19;
let foundResult = false;

while (!foundResult) {
  let counter = 1;
  number += 1;
  
  let hasRemainder = false;
  do {  
    if (number % counter != 0) {
      hasRemainder = true;
      break;
    }
    counter += 1;
  } while(counter <= 20);

  foundResult = !hasRemainder;
}

console.log(number);
