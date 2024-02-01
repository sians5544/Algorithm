const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input[0].trim();
let columns = [];
let maxArr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
let columnsArr = Array(1001).fill(0);
let cur = 0;
let sum = 0;

for (let i = 1; i <= N; i++) {
  columns.push(input[i].trim().split(" ").map(Number));
}

columns.sort((a, b) => a[0] - b[0]);

for (let j = 0; j < columns.length; j++) {
  columnsArr[columns[j][0]] = columns[j][1];
  if (columns[j][1] > maxArr[1]) {
    maxArr = columns[j];
    maxIdx = j;
  }
}

for (let k = 1; k <= maxArr[0]; k++) {
  cur = Math.max(cur, columnsArr[k]);
  sum += cur;
}

cur = 0;

for (let l = 1000; l > maxArr[0]; l--) {
  cur = Math.max(cur, columnsArr[l]);
  sum += cur;
}

console.log(sum);
