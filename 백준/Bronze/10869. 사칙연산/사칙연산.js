const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split(' ').map(i => +i);
console.log(data[0]+data[1]);
console.log(data[0]-data[1]);
console.log(data[0]*data[1]);
console.log(Math.floor(data[0]/data[1]));
console.log(data[0]%data[1]);