let [testCase, numbers] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
testCase = +testCase;
numbers = numbers.split(" ").map((i) => +i);
let count = 0;

for (j = 0; j < testCase; j++) {
  let number = numbers[j];
  if (number === 1) continue;
  if (number === 2) {
    count++;
    continue;
  } else {
    for (i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
      if (i === Math.ceil(Math.sqrt(number))) {
        if (number % i !== 0) {
          count++;
          break;
        }
        if(number % i === 0){
          break;
        }
      }
      if (number % i === 0) {
        break;
      } 
      else {
        continue;
      }
    }
  }
}

console.log(count);

