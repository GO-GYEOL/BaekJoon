const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ');
const [a,b] = input.map(i => i.split('').reverse().join(''));
console.log(a>b ? a : b)