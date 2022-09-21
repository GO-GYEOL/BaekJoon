const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split(' ').map(i => +i);
const A = data[0];
const B = data[1];
if(A>B){
    console.log(">")
} else if(A<B){
    console.log("<")
} else{
    console.log("==")
}
