let input = +require('fs').readFileSync('dev/stdin')
const soinsoo = [];

let i = 2;
while(true){
    if(input % i === 0){
        input /= i;
        soinsoo.push(i);
        i = 1;
    }
    i++;
    if(i>input) break;
}

console.log(soinsoo.join('\n'))