const fs = require('fs');
const { fileURLToPath } = require('url');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 최소 한개의 모음(a,e,i,o,u), 최소 두개의 자음
let [L, C] = input[0].split(' ').map(Number);

let str = input[1].split(' ');
let set = new Set();
let vowel = { a: 1, e: 1, i: 1, o: 1, u: 1 };

const consonantCnt = (arr) => {
  let cnt = 0;

  for (let a of arr) {
    if (vowel[a]) cnt++;
  }

  if (cnt > 0 && arr.length - cnt >= 2) {
    return true;
  } else {
    return false;
  }
};

const DFS = (len, tmp, check) => {
  if (len === L && consonantCnt(tmp)) {
    set.add(tmp.join(''));
  } else {
    for (let i = 0; i < C; i++) {
      if (check[i] === 0 && tmp[tmp.length - 1] < str[i]) {
        check[i] = 1;
        tmp.push(str[i]);
        tmp.sort();
        DFS(len + 1, tmp, check);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
};

for (let i = 0; i < C; i++) {
  let tmp = [];
  let check = Array(C).fill(0);
  check[i] = 1;
  tmp.push(str[i]);
  DFS(1, tmp, check);
}

console.log([...set].sort().join('\n'));
