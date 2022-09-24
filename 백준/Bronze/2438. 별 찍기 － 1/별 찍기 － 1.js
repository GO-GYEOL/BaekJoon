const num = +require('fs').readFileSync('dev/stdin');
let star = "";
for(i=0; i<num; i++){
    star += "*"
    console.log(star)
}