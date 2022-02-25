const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +input[0];
let index = 1;

function solution(num, workers) {
  workers.sort((a, b) => a[0] - b[0]);

  let cnt = num;
  let max = workers[0][1];

  for (let i = 1; i < workers.length; i++) {
    if (workers[i][1] < max) {
      max = workers[i][1];
    } else {
      cnt--;
    }
  }

  return cnt;
}

for (let i = 0; i < t; i++) {
  let answer = 0;

  let n = +input[index];

  let workers = [];
  for (let j = 1; j <= n; j++) {
    workers.push(input[index + j].split(' ').map(Number));
  }

  console.log(solution(n, workers));
  index = index + n + 1;
}
