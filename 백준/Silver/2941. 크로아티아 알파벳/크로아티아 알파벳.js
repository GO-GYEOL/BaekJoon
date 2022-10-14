let input = require('fs').readFileSync('dev/stdin').toString().trim();
let start = true;
const result = [];
const obj = {
  "dz=": "dž",
  "c=": "č",
  "c-": "ć",
  "d-": "đ",
  "lj": "lj",
  "nj": "nj",
  "s=": "š",
  "z=": "ž",
};

function inputToResult() {
  for (i = 0; i < Object.keys(obj).length; i++) {
    if (input.includes(Object.keys(obj)[i])) {
      input = input.replace(Object.keys(obj)[i], ",");
      result.push(Object.values(obj)[i]);
      break; 
      // break 안넣어주면, dz=dz= 문자열 제대로 안나온다.
      // 한개 빼면 다시 사이클 돌려야한다.
      // 계속 돌리면 dz=를 input에서 없애고, dz=가 한개 더있음에도 다음 obj의 index로 넘어가서 체크를 하기 때문임. 그래서 z=를 체크한다.
    }
  }
}

while (start) {
  let check = [];
  inputToResult();
  for (i = 0; i < Object.keys(obj).length; i++) {
    if (input.includes(Object.keys(obj)[i])) {
      check.push(Object.keys(obj)[i]);
    }
  }
  if (check.length === 0) {
    start = false;
  } else true;
}

input = input.split("").filter((i) => i !== ",");
let realResult = result.concat(input);
console.log(realResult.length);
