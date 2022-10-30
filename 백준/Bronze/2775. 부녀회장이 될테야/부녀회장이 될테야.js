const input = require('fs').readFileSync('dev/stdin').toString().split('\n').map(i=>+i)
const T = input.shift();

for (let i = 0; i < T; i++) {
  const k = input.shift(); // 층수, 2
  const n = input.shift(); // 호수, 3

  // 각 방당 인원수를 저장할 2차원 배열 선언
  const house = Array.from(Array(k+1), ()=>Array(n+1).fill(0));
  // 0층 (0층의 i호에는 i명이 산다.)
  for(let i = 1; i<=n; i++){
    house[0][i] = i;
  }
  // 1~k층
  for(let i =1; i<=k; i++){
    for(let j = 1; j<=n; j++){
      house[i][j] = house[i-1][j] + house[i][j-1];
    }
  }
  console.log(house[k][n])
}
