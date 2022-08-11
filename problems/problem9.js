/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * 
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 * 
 * https://projecteuler.net/problem=9
 */

let a = 0;
let b = 0;
let c = 0;
let sum = 1000;
let foundTriplet;

for (a = 1; a < sum / 3; a += 1) {
  for (b = a; b < sum / 2; b += 1) {
    c = sum - a - b;

    if (a * a + b * b == c * c) {
      foundTriplet = true;
      break;
    }
  }

  if (foundTriplet) {
    break;
  }
}

console.log(a * b * c);
