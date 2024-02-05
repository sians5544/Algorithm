const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let inputObj = new Map();

for (let i = 1; i <= N; i++) {
  let str = input[i].trim();
  if (str.length >= M) {
    inputObj.set(str, (inputObj.get(str) || 0) + 1);
  }
}

console.log(
  [...inputObj]
    .sort((a, b) =>
      a[1] > b[1]
        ? -1
        : a[1] < b[1]
        ? 1
        : a[0].length > b[0].length
        ? -1
        : a[0].length < b[0].length
        ? 1
        : a[0] > b[0]
        ? 1
        : a[0] < b[0]
        ? -1
        : 0,
    )
    .map((arr) => arr[0])
    .join("\n"),
);
