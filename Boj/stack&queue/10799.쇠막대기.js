const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let strs = input[0];
let stack = [];
let answer = 0;

for(let i = 0; i < strs.length; i++){

    if(strs[i] === '(') stack.push(strs[i]);
    else{
        stack.pop();
        strs[i-1] === '(' ?  answer+= stack.length : answer+=1;
    }
}

console.log(answer);
