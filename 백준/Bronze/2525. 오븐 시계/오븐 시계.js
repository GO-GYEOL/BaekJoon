const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split('\n');
const start = data[0].split(' ').map(i => +i);
const startH = start[0];
const startM = start[1];
const durationH = Math.floor(+data[1]/60);
const durationM = +data[1]%60;
let endH;
let endM;
endH = startH + durationH;
    if(startM+durationM>=60){
        endH++;
        endM = startM+durationM-60;
    } else if(startM+durationM<60){
        endM = startM+durationM;
    }
if(endH>=24){
  endH -= 24;
}
console.log(endH, endM)