const input = require('fs').readFileSync('dev/stdin').toString().trim();
let result = 0;

const obj = {
  1: "ABC",
  2: "DEF",
  3: "GHI",
  4: "JKL",
  5: "MNO",
  6: "PQRS",
  7: "TUV",
  8: "WXYZ",
};

for(i=0; i<input.length; i++){
    for(j=1; j<=Object.keys(obj).length; j++){
        if(obj[j].includes(input[i])){
            result += j+2;
        }
    }
}

console.log(result)