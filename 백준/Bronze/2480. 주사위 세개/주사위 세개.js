const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(i=>+i);
if (a === b && b === c && a === c) { console.log(10000 + a * 1000) };
if (a !== b || b !== c) {
  if (a === b || a === c) { console.log(1000 + a * 100) };
  if (b === c) { console.log(1000 + b * 100) };
}
if(a !== b && b !== c && c !== a){
  console.log([a,b,c].sort().reverse()[0]*100)
}
