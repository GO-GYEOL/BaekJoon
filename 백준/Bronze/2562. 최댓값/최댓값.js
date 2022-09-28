const [...d] = require('fs').readFileSync('dev/stdin').toString().split('\n');
const data = d.map(i => +i);
const max = Math.max(...data)
console.log(max);
console.log(data.indexOf(max)+1);