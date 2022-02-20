const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [m, n] = input[0].split(' ').map(Number);
let snacks = input[1].split(' ').map(Number);

let answer = 0;

snacks.sort((a, b) => a - b);

let left = 0;
let right = snacks[n - 1];

const countSnack = (mid) => {
  let cnt = 0;

  for (let snack of snacks) {
    if (snack >= mid) {
      cnt += Math.floor(snack / mid);
    }
  }

  return cnt;
};

while (left <= right) {
  let mid = parseInt((left + right) / 2);

  if (countSnack(mid) >= m) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
