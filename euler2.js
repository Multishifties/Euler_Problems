//Euler Problem 2.  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var fibArray = [1,2];
var total = 2;

for (var i = 0; i < fibArray.length; i += 1) {
  var fib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  if (fib < 4000001) {
  fibArray.push(fib);
  }     
  if (fib % 2 === 0 && fib < 4000001) {
    total = total + fib;
  } 
}

console.log("The answer to Euler Problem 2 is " + total);