const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let X = +input[0];
let strs = input[1].trim().split('');

let mCnt = 0;
let wCnt = 0;

let answer = 0;

for (let i = 0; i < strs.length; i++) {
  if (Math.abs(mCnt - wCnt) < X) {
    strs[i] === 'M' ? (mCnt += 1) : (wCnt += 1);
    answer += 1;
  } else {
    if (strs[i] === 'M') {
      if (Math.abs(mCnt + 1 - wCnt) <= X) {
        answer += 1;
        mCnt += 1;
      } else {
        if (i + 1 < strs.length && strs[i + 1] === 'W') {
          let copy = strs[i];
          strs[i] = strs[i + 1];
          strs[i + 1] = copy;
          wCnt += 1;
          answer += 1;
        } else break;
      }
    } else {
      if (Math.abs(mCnt - (wCnt + 1)) <= X) {
        answer += 1;
        wCnt += 1;
      } else {
        if (i + 1 < strs.length && strs[i + 1] === 'M') {
          let copy = strs[i];
          strs[i] = strs[i + 1];
          strs[i + 1] = copy;
          mCnt += 1;
          answer += 1;
        } else break;
      }
    }
  }
}

console.log(answer);
