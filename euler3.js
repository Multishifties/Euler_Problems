//Euler Problem 3.  What is the largest prime factor of the number 600851475143?

function maxP(a) {
var b = a - 1;
var IsPrime = true;
while (b !== 1) {
  if (a % b === 0)
    IsPrime = false;
    b = b - 1;
}
if (IsPrime === true) {
  console.log("Prime");
  console.log(a);
 }
}

function euler3(x) {
  for (i = 2; i <= 10000; i++) {
    if (x % i === 0 && maxP(i) === true) {
    }
  }
}

var stringNumber = prompt("Give me any number, and I will give you the prime factors of that number, from smallest to largest, as long as they are below 10,000!");
var parsedNumber = parseInt(stringNumber);
var x = parsedNumber;

euler3(x);