const [n, ...arg] = require('fs').readFileSync('dev/stdin').toString().split('\n');
for (i = 0; i < n; i++) {
  let x = arg[i].split(" "); // 여기에선 ["1", "1"] 형태의 배열 형태이므로 + 또는 Number를 사용할 수 없었던 것이다.
  console.log(+x[0] + +x[1]);
}
