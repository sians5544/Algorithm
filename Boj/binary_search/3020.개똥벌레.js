const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, h] = input[0].split(' ').map(Number);
let nums = [];

for (let i = 1; i < input.length; i++) {
  nums.push(+input[i].trim());
}

let left = 0;
let right = h;
let answer = Number.MAX_SAFE_INTEGER;
let mid = 0;
let mid2 = 0;

const countBomb = (mid) => {
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    // 종유석
    if (i % 2 !== 0) {
      if (h + 1 - nums[i] < mid) cnt++;
    } else {
      if (nums[i] > mid) cnt++;
    }
  }

  return cnt;
};

while (left <= right) {
  // 구간 조절
  mid = parseInt(left + right / 2);

  if (countBomb(mid) <= answer) {
    answer = countBomb(mid);
    mid2 = Math.max(mid2, mid);
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer, mid2);
