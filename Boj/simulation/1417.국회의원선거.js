const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = [];
let checkNum = 0;
let answer = 0;
let N = +input[0].trim();
for (let i = 1; i <= N; i++) {
  nums.push(+input[i].trim());
}

checkNum = nums.shift();

if (nums.length <= 0) return console.log(0);
nums.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

while (1) {
  nums.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
  if (checkNum > nums[0]) break;
  answer++;
  checkNum += 1;
  nums[0] -= 1;
}

console.log(answer);
