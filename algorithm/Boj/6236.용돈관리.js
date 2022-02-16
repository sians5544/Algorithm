const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let nums = [];

for (let i = 1; i < input.length; i++) {
  nums.push(+input[i]);
}

let right = 1e9;
let left = Math.max(...nums); // 시작 값을 배열 중 가장 큰 값으로 정하지 않으면 출금을 할 수가 없음
let answer = 0;

let countInput = (mid) => {
  let cnt = 1;
  let total = mid;

  for (let num of nums) {
    if (total < num) {
      cnt++;
      total = mid;
    }
    total -= num;
  }

  console.log(mid, cnt);
  return cnt;
};

while (left <= right) {
  let mid = parseInt((left + right) / 2);

  if (countInput(mid) > m) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
