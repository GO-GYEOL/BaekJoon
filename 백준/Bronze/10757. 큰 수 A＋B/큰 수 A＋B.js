const [a, b] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(i => BigInt(i))
console.log((a+b).toString());
