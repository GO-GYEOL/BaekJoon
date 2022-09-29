let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(i => +i%42);
const newArr = input.filter((i, index) => input.indexOf(i) === index);
console.log(newArr.length);