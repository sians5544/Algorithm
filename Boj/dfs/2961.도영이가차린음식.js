const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input[0].trim();
let foods = [];
let answer = Number.MAX_SAFE_INTEGER;
let tmp = [];

for (let i = 1; i <= N; i++) {
  foods.push(input[i].split(" ").map(Number));
}

const getMinValue = (foods) => {
  let sweet = 0;
  let sourness = 1;

  for (let food of foods) {
    sourness *= food[0];
    sweet += food[1];
  }

  return Math.abs(sourness - sweet);
};

const DFS = (L, s, m) => {
  if (L === m) {
    answer = Math.min(answer, getMinValue(tmp.slice()));
  } else {
    for (let i = s; i < foods.length; i++) {
      tmp.push(foods[i]);
      DFS(L + 1, i + 1, m);
      tmp.pop();
    }
  }
};

for (let i = 1; i <= N; i++) {
  DFS(0, 0, i);
}

console.log(answer);
