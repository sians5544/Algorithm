
// 앞쪽에 있는 병사의 전투력이 항상 뒤쪽의 병사보다 높아야한다 


const fs = require('fs');
const filePath =process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());

let tmp = input[1].split(" ");
let nums = Array(n);

for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}


function solution(n,nums){

  let answer = 0;
  let dy = Array(n).fill(0);

  dy[0]= 1;

  for(let i=1; i<=n; i++){
    let max = 0;
    for(let j=i; j>=0; j--){
      if(nums[i] < nums[j] && dy[j] > max ){
        max = dy[j];
      }
      dy[i] = max+1;
    }
    answer = Math.max(answer,dy[i]);
  }

  answer = parseInt(n-answer);

  return answer;
}

console.log(solution(n,nums));