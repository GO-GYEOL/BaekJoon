const fs = require('fs');
const data = fs.readFileSync('dev/stdin').toString().split(' ').map(i=>+i);
let hours = data[0];
let minutes = data[1];

let alarmMinutes = minutes - 45
    
if(minutes>=45){
    minutes = minutes-45;
} else if(minutes<45 && hours != 0){
    minutes = alarmMinutes+60;
    --hours;
} else if(minutes<45 && hours == 0){
    hours = 23;
    minutes = alarmMinutes+60;
}
console.log(hours, minutes);