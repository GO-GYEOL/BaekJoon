const fs = require('fs');
const inputData = fs.readFileSync('dev/stdin').toString().split('\n');
const num1 = +(inputData[0]);
const num2 = inputData[1];
const num2Cut = new Array();
for(i=0; i<num2.length; i++){
    num2Cut.push(num2.charAt(i));
}
const num3 = num1*parseInt(num2Cut[num2Cut.length-1]);
const num4 = num1*parseInt(num2Cut[num2Cut.length-2]);
const num5 = num1*parseInt(num2Cut[num2Cut.length-3]);
const num6 = num3+(num4*10)+(num5*100);

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);