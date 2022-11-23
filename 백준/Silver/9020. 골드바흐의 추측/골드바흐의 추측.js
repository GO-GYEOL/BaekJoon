let [testcase, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(i=>+i);
const b = 10000;

// 에라토스테네스의 체
let arr = [];
for(let i = 2; i <= b; i++){
    arr[i] = i;
}
for(let i = 2; i <= b; i++){
    if(arr[i] === 0) continue;
    for(let j = i+i; j<=b; j+= i){
        arr[j] = 0;
    }
}
arr = arr.filter(n => n !== 0);


// 두 소수의 합 = input인 값 찾기
let k = 0;
let answer = "";
let x;
while (testcase--) {
  // console.log(input[k]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // 여기서 중복되는 숫자 잘라버린다. 그리고 i가 커질수록 두 수의 차이가 줄어든다.
      if (arr[i] + arr[j] > input[k]) break;
      if (arr[i] + arr[j] === input[k]) {
        // console.log(arr[i], arr[j]);
        x = `${arr[i]} ${arr[j]}\n`;
      }
    }

  }
  answer += x
  k++;
}
console.log(answer)