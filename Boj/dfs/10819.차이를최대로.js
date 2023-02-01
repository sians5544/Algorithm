const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let arr = input[1].split(' ').map(Number);
let tmp = [];
let answer = Number.MIN_SAFE_INTEGER;
let check = Array(N).fill(0);

const sumArr = (nums) => {
  let sum = 0;
  for (let j = 0; j < N - 1; j++) {
    sum += Math.abs(nums[j] - nums[j + 1]);
  }

  return sum;
};

const DFS = (v) => {
  if (v === N) {
    answer = Math.max(answer, sumArr(tmp));
  } else {
    for (let i = 0; i < N; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        tmp.push(arr[i]);
        DFS(v + 1);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
};

DFS(0);
console.log(answer);
