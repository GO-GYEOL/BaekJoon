const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split(' ').map(i=>+i);
let hours = data[0];
let minutes = data[1];

if(minutes>=45){
    minutes = minutes-45;
} else if(minutes<45 && hours != 0){
    hours = hours-1;
    const sub = 45 - minutes;
    minutes = 60 - sub;
} else if(minutes<45 && hours == 0){
    hours = 23;
    const sub = 45 - minutes;
    minutes = 60 - sub;
}
console.log(hours, minutes);