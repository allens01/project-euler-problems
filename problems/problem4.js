/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * 
 * https://projecteuler.net/problem=4
 */

function isPalidromic(number) {
  const reverseNumber = number.toString().split("").reverse().join("");
  
  return reverseNumber === number.toString();
}

let digit1 = 999;
let digit2 = 999;
let largest = 0;

do {
  const result = digit1-- * digit2; 
  
  if (isPalidromic(result) && result > largest) {        
    largest = result;
    // We have found the largest with this diget2, move on...
    digit1 = 999;
    digit2 -= 1;
  } else if (digit1 < 100) {
    digit1 = 999;
    digit2 -= 1;
  }
} while(digit2 > 100);

console.log(largest);
