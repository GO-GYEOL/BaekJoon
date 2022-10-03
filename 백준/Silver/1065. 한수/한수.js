const data = +require('fs').readFileSync('dev/stdin');
function cal(input) {
  let arr = [];
  let count = 1;
  while (count <= input) {
    const countString = count.toString();
    if (countString.length <= 2) {
      arr.push(count);
    } else {
      if (countString[1] - countString[0] === countString[2] - countString[1]) {
        arr.push(count);
      }
    }
    count++;
  }
  console.log(arr.length);
}
cal(data);
