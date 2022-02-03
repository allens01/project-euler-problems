/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 * 
 * https://projecteuler.net/problem=3
 */

function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if(num % i === 0) return false;
  }
     
  return num > 1;
}

const number = 600851475143;
let result;

for (let i = 1, s = Math.sqrt(number); i <= s; i += 1) {
   if (number % i === 0 && isPrime(i)) {
     result = i;
   }
}

console.log(result);
