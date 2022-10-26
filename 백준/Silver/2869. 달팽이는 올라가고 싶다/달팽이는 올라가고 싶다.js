const [a, b, c] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(i=>+i);
const upSpeed = a-b;
const destination = c-b;

if(destination%upSpeed===0){
  console.log(destination/upSpeed)
}else{
  console.log(Math.floor(destination/upSpeed) + 1)
}