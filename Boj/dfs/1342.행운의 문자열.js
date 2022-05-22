const fs = require('fs');
const { fileURLToPath } = require('url');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let str = input[0].trim().split('');
let len = str.length;
let set = new Set();

const DFS = (L, tmp, check) => {
  if (tmp.length === len) {
    set.add(tmp.join(''));
  } else {
    for (let i = 0; i < len; i++) {
      if (check[i] === 0 && tmp[tmp.length - 1] !== str[i]) {
        check[i] = 1;
        tmp.push(str[i]);
        DFS(L + 1, tmp, check);
        check[i] = 0;
        tmp.pop();
      }
    }
  }
};

for (let i = 0; i < len; i++) {
  let tmp = [];
  let check = Array(len).fill(0);
  check[i] = 1;
  tmp.push(str[i]);
  DFS(0, tmp, check);
}

console.log(set.size);
