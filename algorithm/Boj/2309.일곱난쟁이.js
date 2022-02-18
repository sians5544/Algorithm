const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let nums = [];

let answer = [];

let check = Array(9).fill(0);

let tmp = [];

for (let i = 0; i < input.length; i++) {
  nums.push(+input[i].trim());
}
nums.sort((a, b) => a - b);
function DFS(v, sum) {
  if (tmp.length === 7) {
    let sum = 0;

    for (let t of tmp) {
      sum += t;
    }

    if (sum === 100) answer.push(tmp.slice());
  } else {
    for (let i = v; i < nums.length; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        tmp.push(nums[i]);
        DFS(v + 1);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
}

DFS(0, 0);

console.log(answer[0].join('\n'));
