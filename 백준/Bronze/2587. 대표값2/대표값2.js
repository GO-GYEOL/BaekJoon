let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);
input.sort((a, b) => a - b);
const sum = input.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum/5);
console.log(input[2]);