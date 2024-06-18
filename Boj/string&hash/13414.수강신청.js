const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [K, L] = input[0].trim().split(" ").map(Number);
let hash = new Map();
let answer = [];
let strs = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].trim().leångth > 0) strs.push(input[i].trim());
}

for (let j = 0; j < strs.length; j++) {
  if (hash.get(strs[j])) {
    hash.delete(strs[j]);
    hash.set(strs[j], j);
  } else {
    hash.set(strs[j], j);
  }
}

let arr = [...hash].sort((a, b) => a[1] - b[1]);

for (let k = 0; k < arr.length; k++) {
  if (answer.length < K) {
    answer.push(arr[k][0]);
  }
}

console.log(answer.join("\n"));
