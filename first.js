// Write a short program
// Generates a random number
// Prints the random number
// If the number is less than 0.3, displays "low"
// if the number is greater than 0.7, displays "high"
// if the number is between 0.4 and 0.6, displays "medium"
// if the number is 0.734, displays "secret answer"

const randNum = Math.random();
console.log(randNum);

if (randNum === 0.734) {
  console.log("secret answer");
} else if (randNum < 0.3) {
  console.log("low");
} else if (randNum > 0.7) {
  console.log("high");
} else if (randNum > 0.4 && randNum < 0.6) {
  console.log("medium");
} else {
  console.log("error!");
}

let count = 10;
while (count >= 0) {
  console.log(count);
  count -= 1;
}
