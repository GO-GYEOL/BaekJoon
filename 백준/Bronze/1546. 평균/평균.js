let [sub, score] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
sub = +sub;
score = score.split(' ').map(i => +i);

const max = Math.max(...score);
const newScore = score.map((i) => (i / max) * 100);

result = newScore.reduce((accumulator, currItem) => {
  accumulator += currItem / sub;
  return accumulator;
}, 0);

console.log(result);
