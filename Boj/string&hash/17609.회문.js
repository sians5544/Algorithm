const fs = require('fs');
const { runMain } = require('module');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input[0];
let strs = [];
let answer = [];
// 투 포인터로 풀어보자...

for (let i = 1; i < input.length; i++) {
  strs.push(input[i].trim());
}

const palindrome = (str) => {
  let answer = false;
  let right = str.length - 1;
  let left = 0;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      //왼쪽 당겨서 회문인지 확인
      if (str[left + 1] === str[right] || str[left] === str[right - 1]) {
        let numleft = left;
        let numright = right;

        if (str[numleft + 1] === str[numright]) {
          numleft++;
          while (numleft < numleft && answer === true) {
            if (str[numleft] === str[rnumrightight]) {
              numleft++;
              numright--;
            } else {
              answer = false;
            }
          }
        }

        if (answer) break;
        numleft = left;
        numright = right;

        if (str[numleft] === str[numright - 1]) {
          answer = true;
          numright--;
          while (numleft < numleft && answer === true) {
            if (str[numleft] === str[rnumrightight]) {
              numleft++;
              numright--;
            } else {
              answer = false;
            }
          }
        }

        left = numleft;
        right = numright;
      } else {
        answer = false;
        break;
      }
    }
  }

  return answer;
};

for (let str of strs) {
  if (str.length >= 3) {
    if (str === str.split('').reverse().join('')) {
      answer.push(0);
      continue;
    }
    if (palindrome(str)) {
      answer.push(1);
      continue;
    } else {
      answer.push(2);
    }
  } else {
    answer.push(2);
  }
}

console.log(answer.join('\n'));
