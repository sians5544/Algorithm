const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];

let card = input[1].split(' ').map(Number);
let cards = [0, ...card];
// 카드를 4장 산다면
// 1,1,1,1 사는 값 , 2,2 값 3,1 값 들과  4장 짜리 하나 사는 것들의 값을 비교

let dy = Array(1001).fill(0);

let answer = 0;
dy[1] = cards[1];

for (let i = 2; i < cards.length; i++) {
  dy[i] = cards[i];

  for (let j = 1; j < i; j++) {
    dy[i] = Math.max(dy[i], dy[i - j] + dy[j]);
  }
  answer = Math.max(dy[i], answer);
}

console.log(answer);
