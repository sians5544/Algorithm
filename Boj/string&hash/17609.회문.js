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

const palindrome = (str, l, r, temp) => {
  let answer = true;
  let right = r;
  let left = l;
  let answerleft = false;
  let answerRight = false;

  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      if (temp === 0) {
        answer = false;
        answerleft = palindrome(str, left + 1, right, 1);
        answerRight = palindrome(str, left, right - 1, 1);
        break;
      } else {
        return false;
      }
    }
  }
  if (answer) return true;

  if (answerleft || answerRight) return true;
  else return false;
};

for (let str of strs) {
  if (str.length >= 3) {
    if (str === str.split('').reverse().join('')) {
      answer.push(0);
      continue;
    }
    if (palindrome(str, 0, str.length - 1, 0)) {
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
