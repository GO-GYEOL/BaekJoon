const [fixedP, variableP, sellingP] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(i=>+i);

const margin = sellingP - variableP;
if (margin <= 0) console.log(-1);
else if (fixedP % margin === 0) console.log(fixedP / margin + 1);
else if (fixedP % margin !== 0) console.log(Math.ceil(fixedP / margin));
