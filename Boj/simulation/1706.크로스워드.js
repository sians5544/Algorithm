const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let strArr = [];
let answer = [];

let [R, C] = input[0].trim().split(" ").map(Number);

for (let i = 1; i < input.length; i++) {
  strArr.push(input[i].trim().split(""));
}

for (let i = 0; i < R; i++) {
  let str = "";
  for (let j = 0; j < C; j++) {
    if (strArr[i][j] === "#") {
      if (str.length > 1) answer.push(str);
      str = "";
      continue;
    }

    str += strArr[i][j];
  }
  if (str.length > 1) answer.push(str);
}

for (let i = 0; i < C; i++) {
  let str = "";
  for (let j = 0; j < R; j++) {
    if (strArr[j][i] === "#") {
      if (str.length > 1) answer.push(str);
      str = "";
      continue;
    }

    str += strArr[j][i];
  }

  if (str.length > 1) answer.push(str);
}

console.log(answer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))[0]);
