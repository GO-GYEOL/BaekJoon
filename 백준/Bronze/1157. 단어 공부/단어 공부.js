let input = require('fs').readFileSync('dev/stdin').toString().toUpperCase();
let countArr = [];
let count = 0;

for (let i = 65; i <= 90; i++) {
  let a = String.fromCharCode(i);
  let index = input.indexOf(a);
  while (index !== -1) {
    count++;
    index = input.indexOf(a, index + 1);
  }
  countArr.push(count);
  count = 0;
}

let result;
const filtering = countArr.filter(i => Math.max(...countArr) === i)
if(filtering.length > 1){
    result = '?'
    console.log(result);
}
if(filtering.length === 1){
    const result = countArr.indexOf(filtering[0])
    console.log(String.fromCharCode(result+65));
}

