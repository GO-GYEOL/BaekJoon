const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split('\n');
const B = data[1].split("").map(i => +i);
console.log(data[0]*B[2]);
console.log(data[0]*B[1]);
console.log(data[0]*B[0]);
console.log(data[0]*data[1]);
