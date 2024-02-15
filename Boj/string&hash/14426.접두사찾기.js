const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].trim().split(" ").map(Number);
let setS = new Set();
let strs = [];
let answer = 0;

for (let i = 1; i < input.length; i++) {
  if (i <= N) {
    let str = input[i].trim();
    for (let j = 1; j <= str.length; j++) {
      setS.add(str.slice(0, j));
    }
  } else strs.push(input[i].trim());
}

for (let k = 0; k < strs.length; k++) {
  if (setS.has(strs[k])) {
    answer++;
    continue;
  }
}

console.log(answer);
