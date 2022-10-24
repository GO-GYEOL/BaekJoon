let [testCase, ...inputed] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
testCase = +testCase
let count = 0;
function notGwCheck(string) {
  // console.log(string)
  for (let i = 0; i < string.length; i++) {
    if (string[i + 1] === string[i]) {
      continue;
    } else {
      for (let j = i + 2; j < string.length; j++) {
        if (string[i] === string[j]) {
          count++;
          return;
        } else {
          continue;
        }
      }
    }
  }
}

for (let i = 0; i < testCase; i++) {
  if (inputed[i].length <= 2) {
    continue;
  } else notGwCheck(inputed[i]);
}

console.log(testCase - count);
