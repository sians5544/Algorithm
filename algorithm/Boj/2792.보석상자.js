const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let jewelry = [];

for (let i = 1; i < input.length; i++) {
  jewelry.push(+input[i]);
}

jewelry.sort((a, b) => a - b);

let left = 0;
let right = jewelry[jewelry.length - 1];
let maxNum = jewelry[jewelry.length - 1];
let answer = Number.MAX_SAFE_INTEGER;
let mid = 0;

let countStudent = (mid) => {
  let cnt = 0;

  for (jew of jewelry) {
    if (jew >= mid) {
      cnt += Math.floor(jew / mid);
      if (Math.floor(jew % mid) > 0) cnt += 1;
    }
  }

  return cnt;
};

while (left <= right) {
  let mid = parseInt((left + right) / 2);

  if (countStudent(mid) <= n) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
