const [testCase, ...text] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (i = 0; i < text.length; i++) {
  let score = 0;
  let cnt = 0;
  for (j = 0; j < text[i].length; j++) {
    if (text[i][j] === "O") {
      cnt++;
      score += cnt;
    } else {
      cnt = 0;
    }
  }
  console.log(score);
}
