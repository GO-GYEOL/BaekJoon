// 배열로 출력해도 되나? 아니면 문자열로 해야되나? 배열로 해도 될 듯.
const [info, arr] = require('fs').readFileSync('dev/stdin').toString().split('\n');
const newArr = arr.split(" ").map((i) => +i);
const newInfo = info.split(" ").map((i) => +i);
const newArr2 = newArr.filter((i) => i < newInfo[1]);
const newArr3 = newArr2.map(i => `${i}`);
const newArr4 = newArr3.join(' ')
console.log(newArr4)

