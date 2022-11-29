const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n").join(' ').split(' ').map(i=>+i);
// console.log(input)
const max = Math.max(...input)
const index = input.indexOf(max);
const hang = Math.floor(index/9)+1
const yul = index%9+1
console.log(max)
console.log(hang, yul)
