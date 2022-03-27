const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let nums = [];

// let answer = Number.MAX_SAFE_INTEGER;

for (let i = 1; i < input.length; i++) {
  nums.push(input[i].trim().split(' ').map(Number));
}

let checkarr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let [a, b] of nums) {
  checkarr[a][b] = 1;
  checkarr[b][a] = 1;
}

// 각 노드의 합계를 구하기
let finallyArr = Array(n + 1).fill(0);

let BFS = (num) => {
  let L = 1;
  let queue = [];
  let total = 0;

  //중복 체크를 위한 배열
  let dupliArr = Array(n + 1).fill(0);

  queue.push(num);
  dupliArr[num] = 1;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let que = queue.shift();
      for (let j = 1; j < checkarr.length; j++) {
        if (checkarr[que][j] === 1 && checkarr[que][j] === 1 && dupliArr[j] === 0) {
          total += L;
          queue.push(j);
          dupliArr[j] = 1;
        }
      }
    }
    L++;
  }

  return total;
};

let answer = Number.MAX_SAFE_INTEGER;
let answerindex = -1;

for (let i = 1; i < n + 1; i++) {
  finallyArr[i] = BFS(i);
}

finallyArr.forEach((item, index) => {
  if (item !== 0 && item < answer) {
    answer = item;
    answerindex = index;
  }
});

console.log(answerindex);
