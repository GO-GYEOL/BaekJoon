const [testCase, ...dataArr] = require('fs').readFileSync('dev/stdin').toString().split('\n')
for(i=0; i<+testCase; i++){
    const data = dataArr[i].split(' ').map(i => +i);
    console.log(`Case #${i+1}: ${data[0]+data[1]}`)
}