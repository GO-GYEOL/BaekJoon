const [total, number, ...items] = require('fs').readFileSync('dev/stdin').toString().split('\n');
let sum = 0;
for (i = 0; i < +number; i++) {
  const [price, count] = items[i].split(" ").map((i) => +i);
  sum += price * count;
}
if (sum === +total) {
  console.log("Yes");
} else {
  console.log("No");
}
