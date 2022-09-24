const num = +require('fs').readFileSync('dev/stdin');
for (i = 0; i < num; i++) {
  let msg = '';
  for (j = num - 1; j >= 0; j--) {
    if (i < j) {
      msg += " ";
    } else {
      msg += "*";
    }
  }
  console.log(msg);
}