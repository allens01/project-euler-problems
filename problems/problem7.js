/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 * 
 * https://projecteuler.net/problem=7
 */

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if(num % i === 0) return false;
  }
     
  return num > 1;
}

let primeCounter = 1;
let lastNumber = 2;

do {
  lastNumber += 1;

  if (isPrime(lastNumber)) {
    primeCounter += 1;
  }
} while(primeCounter !== 10001);

console.log(lastNumber);
