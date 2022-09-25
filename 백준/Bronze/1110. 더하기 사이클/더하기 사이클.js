const firstInputNum = require('fs').readFileSync('dev/stdin').toString().trim();
let inputNum = firstInputNum;
let result = 0;
let cnt = 0;
let finish = false;
while (!finish) {
  result = Math.floor(inputNum / 10) + (inputNum % 10);
  inputNum = inputNum%10*10 + result%10;
  cnt++;
  if(firstInputNum==inputNum){
    finish = true;
  }
}
console.log(cnt);
