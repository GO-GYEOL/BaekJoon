const [testCnt, ...numbers] = require('fs').readFileSync('dev/stdin').toString().split('\n');

let answer = '';
for(i=0; i<testCnt; i++){
    let num = numbers[i].split(' ').map(i=>+i);
    answer += num[0] + num[1] + "\n";
}
console.log(answer);