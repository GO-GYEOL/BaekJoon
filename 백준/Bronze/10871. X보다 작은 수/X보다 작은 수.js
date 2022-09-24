// filter
const [info, arr] = require('fs').readFileSync('dev/stdin').toString().split('\n');
const newArr = arr.split(" ").map((i) => +i);
const newInfo = info.split(" ").map((i) => +i);
const newArr2 = newArr.filter((i) => i < newInfo[1]);
const newArrLast = newArr2.join(' ');
console.log(newArrLast)

// filter 없이
const [i, a] = require('fs').readFileSync('dev/stdin').toString().split('\n');
const info = i.split(" ");
const infoCnt = +info[0];
const infoNum = +info[1];
const arr = a.split(" ").map((i) => +i);
let msg = "";
for (let i = 0; i < infoCnt; i++) {
  if (infoNum > arr[i]) {
    msg += arr[i].toString()+" ";
  }
}
console.log(msg.trim());
