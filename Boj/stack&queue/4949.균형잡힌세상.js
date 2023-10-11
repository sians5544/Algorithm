const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    
    let stack = [];
    if(input[i] === '.') return;
    let strs = input[i].split('');
    let flag = true;

    for(let s of strs){

        if(s === '(' || s === '[') stack.push(s);
        else if(s === ')' ){
            if( stack.length > 0 && stack[stack.length-1] === '('){
                stack.pop();
            }else if(stack.length > 0 && stack[stack.length-1] !== '('){
                flag = false;
            }
        }
        else if ( s === ']'){   
            if( stack.length > 0 && stack[stack.length-1] === '['){
                stack.pop();
            }else if(stack.length > 0 && stack[stack.length-1] !== '['){
                flag = false;
            }
        }
    }

    if(flag)console.log(stack.length > 0 ? 'no' : 'yes');
    else console.log('no');
}