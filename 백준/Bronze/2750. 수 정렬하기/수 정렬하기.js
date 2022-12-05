let [TC, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString().trim()
  .split("\n")
  .map((i) => +i);
input.sort((a, b) => a - b);
input.map(i=>console.log(i))

