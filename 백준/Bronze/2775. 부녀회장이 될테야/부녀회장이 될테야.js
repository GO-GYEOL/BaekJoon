const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(i=>+i)
const T = input.shift();

for (let i = 0; i < T; i++) {
  const a = input.shift(); // 층수, 2
  const b = input.shift(); // 호수, 3
  const apartment = [];

  for (let i = 0; i <= a; i++) {
    apartment.push([1]);
    for (let j = 1; j < b; j++) {
      if (i === 0) {
        apartment[i].push(j + 1); // [1,2,3]
      } else {
        apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
      }
    }
  }
  const floor = a;
  const room = b - 1;
  console.log(apartment[floor][room]);
}

