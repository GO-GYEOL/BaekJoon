const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line)=>{
    input.push(parseInt(line));
});
rl.on("close", ()=>{
    const X = input[0];
const Y = input[1];


if(X>0 && Y>0){
    console.log(1);
} else if(X>0 && Y<0){
    console.log(4);
} else if(X<0 && Y>0){
    console.log(2);
} else if(X<0 && Y<0){
    console.log(3);
}
    process.exit();
});

