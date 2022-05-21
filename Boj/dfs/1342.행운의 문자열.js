const fs = require('fs');
const { fileURLToPath } = require('url');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let str = input[0].trim().split('');

let tmp = [];
let len = str.length;
let answer = 0;
let set = new Set();
let check = Array(len).fill(0);
set.add(str.join(''));

const DFS = (L) => {
  if (L === len && !set.has(tmp.slice().join(''))) {
    set.add(tmp.slice().join(''));
  } else {
    for (let i = 0; i < len; i++) {
      if (check[i] === 0 && tmp[tmp.length - 1] !== str[i]) {
        check[i] = 1;
        tmp.push(str[i]);
        DFS(L + 1);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
};

DFS(0, 0);

let arr = [...set];

for (let i = 0; i < arr.length; i++) {
  let flag = true;
  for (let j = 1; j < len - 1; j++) {
    if (!flag) break;
    if (arr[i][j - 1] === arr[i][j] || arr[i][j + 1] === arr[i][j]) flag = false;
  }

  if (flag) answer++;
}

console.log(answer);
