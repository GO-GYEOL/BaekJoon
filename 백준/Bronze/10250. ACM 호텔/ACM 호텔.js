let [testCase, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
for (let i = 0; i < testCase; i++) {
  let [height, width, order] = arr[i].split(" ").map((i) => +i);
  let [floor,line] = [order % height.toString(), (Math.floor(order / height)+1).toString()]
  if(+floor === 0){
    floor = height.toString();
    line = Math.floor(order/height).toString()
  }
  if(line.length===1){
    line = '0'+line
  }
  console.log(floor+line)

}