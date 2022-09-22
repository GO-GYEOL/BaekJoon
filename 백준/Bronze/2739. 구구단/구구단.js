const x = +require('fs').readFileSync('dev/stdin');

for(i=1; i<10; i++){
    console.log(`${x} * ${i} = ${x*i}`)
}