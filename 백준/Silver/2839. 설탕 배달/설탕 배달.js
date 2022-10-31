let input = +require('fs').readFileSync('dev/stdin');
let count = 0;

while (input % 5 !== 0) {
  input -= 3;
  count++;
}
if (input < 0) {
  console.log(-1);
} else {
  while (input > 0) {
    input -= 5;
    count++;
  }
  console.log(count);
}