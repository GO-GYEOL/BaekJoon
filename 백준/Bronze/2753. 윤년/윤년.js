const fs = require('fs');
const data = fs.readFileSync('dev/stdin');
if(data%4===0 && data%100 !== 0){
    console.log(1);
} else if(data%400 === 0){
    console.log(1);
} else {
    console.log(0)
}