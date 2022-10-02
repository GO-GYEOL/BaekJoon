let self = [];
let notSelf = [];

function d(n) {
  let sum = 0;
  let nString = n.toString();
  for (i = 0; i < nString.length; i++) {
    sum += Number(nString[i]);
  }
  notSelf.push(n + sum);
  return n + sum;
}

for (n = 1; n < 10001; n++) {
  self.push(n);
}

for (n = 1; n < 10000; n++) d(n);

self = self.filter((i) => !notSelf.includes(i));

for(i=0; i<self.length; i++){
    console.log(self[i])
}
