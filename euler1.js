//Euler Problem 1.  Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;

for (var i = 0; i < 1000; i ++) {
  if (i % 3 === 0 || i % 5 === 0)
    total = total + i;
}

console.log("The answer to Euler Problem 1 is " + total);