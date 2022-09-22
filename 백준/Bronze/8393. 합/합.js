const x = +require('fs').readFileSync('dev/stdin');
let sum = 0;
for(i=1; i<x+1; i++){
   sum += i 
}
console.log(sum)