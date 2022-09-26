const [a, bArr] = require('fs').readFileSync('dev/stdin').toString().split('\n');
const newBArr = bArr.split(" ").map((i) => +i);
console.log(`${Math.min(...newBArr)} ${Math.max(...newBArr)}`);
