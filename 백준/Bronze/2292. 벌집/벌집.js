const input = +require('fs').readFileSync('dev/stdin').toString().trim();
let move = 1;
let growingNum =1;

while(growingNum<input){
  growingNum += 6*move;
  move++
}
console.log(move);