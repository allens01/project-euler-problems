/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * 
 * Find the sum of all the primes below two million.
 * 
 * https://projecteuler.net/problem=10
 */

 function isPrime(num) {
  for(let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if(num % i === 0) return false;
  }
     
  return num > 1;
}

let sum = 0;

for (let i = 2; i < 2000000; i += 1) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum);
