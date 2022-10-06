const [len, num] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const numbers = num.split('')
const acc = numbers.reduce((acc, cur)=>{
   acc += +cur;
    return acc;
},0)
console.log(acc);