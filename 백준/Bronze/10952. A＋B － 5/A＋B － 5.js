const [...a] = require('fs').readFileSync('dev/stdin').toString().split('\n');

for (i = 0; i < a.length; i++) {
  const newA = a[i].split(" ").map((i) => +i);
  if (newA[0] === 0 && newA[1] === 0) return;
  console.log(newA[0] + newA[1]);
}
