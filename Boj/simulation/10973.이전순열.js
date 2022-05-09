const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let nums = input[1].split(' ').map(Number);

let answer = '';
let list = [];
let tmp = [];
let check = Array(N).fill(0);

const DFS = (L) => {
  if (L === N && +nums.join('') >= tmp.slice().join('')) {
    list.push(+tmp.slice().join(''));
  } else {
    for (let i = 0; i < N; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        tmp.push(nums[i]);
        DFS(L + 1);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
};

DFS(0);

list.sort((a, b) => a - b);

if (list.length === 1) return console.log(-1);

answer = list[list.length - 2] + '';

console.log([...answer].map(Number).join(' '));
