let input = require('fs').readFileSync('/dev/stdin').toString();
let result = [];
for (i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);
  result.push(input.indexOf(alphabet));
}
console.log(result.join(' '));
