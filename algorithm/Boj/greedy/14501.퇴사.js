const { time } = require('console');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let times = [];

let answer = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < input.length; i++) {
  times.push(input[i].trim().split(' ').map(Number));
}

let dy = Array(n + 1).fill(0);

for (let i = 0; i < times.length; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (j + times[j][0] <= i && j + times[j][0] < n + 1 && dy[j] > max) {
      max = dy[j];
    }
  }

  if (i + times[i][0] < n + 1) dy[i] = times[i][1] + max;

  answer = Math.max(dy[i], answer);
}

console.log(answer);
