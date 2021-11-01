// 괄호 문자열 ( 와 ) 만으로 구성되어 있는 문자열
// 올바르게 구성된 문자열을 VPS () 
// (x)도 VPS 
// VPS x 와 y를 접합 시킨 새로운 문자열 xy 도 VPS

const fs = require('fs');
const { fileURLToPath } = require('url');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());

let str = Array(n);

for (let i = 1; i < input.length; i++) {
	str[i-1]=input[i].trim();
}
  let answer = "";
  for(let x of str){
    let stack = [];
    for(let i = 0; i< x.length; i++){
      if(x[i] ===')' && stack[stack.length-1] === '('){
        stack.pop();
      }else{
        stack.push(x[i]);
      }
    }
  
    if(stack.length !==0 ) answer="NO";
    else answer = "YES";

    console.log(answer);
  }

