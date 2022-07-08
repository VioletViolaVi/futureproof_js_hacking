// Loop through the numbers from 1 to 100;
// For each number:
// If the number is evenly divisible by 3, print 'Fizz'
// If the number is evenly divisible by 5, print 'Buzz'
// If the number is divisible by 3 and 5, print 'FizzBuzz'
// Otherwise, print the number;
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, 10

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
