const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split(' ').map(i => +i);
const standard = [1, 1, 2, 2, 2, 8];
const result = data.map((i, index) => standard[index]-i);
console.log(...result);