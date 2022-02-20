const { Hash, Cipher } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let nums = [];

for (let i = 1; i < input.length; i++) {
  nums.push(+input[i]);
}

let dy = Array(n).fill(0);

dy[0] = 1;

let answer = 0;

for (let i = 1; i < nums.length; i++) {
  let max = 0;

  for (let j = i - 1; j >= 0; j--) {
    if (nums[j] < nums[i] && dy[j] > max) {
      max = dy[j];
    }
  }

  dy[i] = max + 1;
  answer = Math.max(answer, dy[i]);
}

console.log(n - answer);

// 가장 큰 부분 수열을 구하고 그 값들을 고정으로 두고
// 나머지 아이들만 옮긴다면 최소의 변동을 확인할 수 있다!!!
