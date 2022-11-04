const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number)
let count = [];
let sum = 0;

function calSoSoo(a) {
  if (a === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = input[0]; i <= input[1]; i++) {
  if(calSoSoo(i)){
    count.push(i);
    sum += i
  }
  
}

if(count.length===0){
  console.log(-1);
} else {
  console.log(sum)
  console.log(count[0]);
}