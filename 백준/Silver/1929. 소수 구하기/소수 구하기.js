const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const start = +input.shift();
const end = +input.shift();
const isPrimeNumber = Array(end+1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;
const result = [];

for(let i=2; i<end; i++ ){
  if(isPrimeNumber[i]){
    let m = 2;
    while(i * m <= end){
      isPrimeNumber[i*m] = false;
      m++
    }
  }
}

for(let i=start; i<=isPrimeNumber.length; i++){
  if(isPrimeNumber[i]){
    result.push(i);
  }
}
console.log(result.join('\n'))