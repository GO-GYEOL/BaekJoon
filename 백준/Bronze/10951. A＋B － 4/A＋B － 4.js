const [...a] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

for (i = 0; i < a.length; i++) {
  const newA = a[i].split(" ").map((i) => +i);
  console.log(newA[0] + newA[1]);
}