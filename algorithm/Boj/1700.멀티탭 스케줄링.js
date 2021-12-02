
const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,k] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number)

function solution(n,k,nums){
  let answer = 0;

  let hash = new Map();

  for(let i = 0; i<n; i++){
    hash.set(nums[i],1);
  }

  for(let i = n; i<nums.length; i++){

    if(!hash.has(nums[i])){
      answer++;
    }
  }
  return answer;
}

console.log(solution(n,k,nums));

