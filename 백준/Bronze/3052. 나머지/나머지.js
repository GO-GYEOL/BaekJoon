let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(i => +i);
input = input.map(i => i%42)
const newSet = new Set(input);
console.log(newSet.size);