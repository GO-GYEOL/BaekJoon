const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString();
console.log(Number(data)-543);