const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let pulma_arr = input.split('-');
let answer = 0;

for (let i = 0; i < pulma_arr.length; i++) {
  let num_arr = pulma_arr[i].split('+');
  if (num_arr.length > 1) pulma_arr[i] = num_arr.reduce((acc, cur) => +acc + +cur);
  else pulma_arr[i] = +num_arr[0];
}

answer = pulma_arr[0];

for (let j = 1; j < pulma_arr.length; j++) {
  answer += -pulma_arr[j];
}

console.log(answer);
