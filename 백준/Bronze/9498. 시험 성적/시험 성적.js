const fs = require('fs');
const data = fs.readFileSync('dev/stdin');
if(data>=90 && data<=100){
    console.log("A")
} else if(data>=80 && data<90){
    console.log("B")
} else if(data>=70 && data<80){
    console.log("C")
} else if(data>=60 && data<70){
    console.log("D")
}  else{
    console.log("F")
} 