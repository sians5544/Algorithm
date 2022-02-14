const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [f, s, g, u, d] = input[0].split(' ').map(Number);

let L = 0;

let check = Array(1e7).fill(0);

// queue 를 가르키는 포인터의 역할
let head = 0;
let queue = [];

if (s === g) return console.log(0);

queue.push(s);
check[s] = 1;

while (queue.length > head) {
  let len = queue.length - head;
  let flag = false;

  for (let i = 0; i < len; i++) {
    for (let num of [queue[head] + u, queue[head] - d]) {
      if (num === g) return console.log((L += 1));

      if (check[num] === 0 && num > 0 && num <= f) {
        check[num] = 1;
        queue.push(num);
      }
    }
    head++;
  }
  L++;
}

console.log(check[g] > 0 ? L : 'use the stairs');
