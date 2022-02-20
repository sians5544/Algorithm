const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0].trim().split('');
let blast = input[1].trim();

let stack = [];

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);

  if (stack[stack.length - 1] === blast[blast.length - 1]) {
    let num = blast.length;
    if (stack.slice(-num).join('') === blast) {
      while (num) {
        num--;
        stack.pop();
      }
    }
  }
}

console.log(stack.length > 0 ? stack.join('') : 'FRULA');

// 반례
// b3bbc , b
