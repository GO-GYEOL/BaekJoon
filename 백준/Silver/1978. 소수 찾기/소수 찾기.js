const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let test = +input.shift();
let arr = input.shift().split(" ").map(Number);
let count = 0;

arr.forEach((i) => {
  if (calSoSoo(i)) {
    count++;
  }
});

function calSoSoo(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(count)