const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n,m] = input[0].split(" ").map(Number);

let tmp = input[1].split(" ");
let nums = Array(n);

for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n,m,nums){

  let answer = 0 ,left = 0;

  let right = 10e9;

  function count(mid){
    let count = 0;
    for(let x of nums){
      if(x>=mid){
        count+= Math.ceil(x-mid);
      }
    }
    return count;
  }

  while(left<=right){

    let mid = parseInt((left+right)/2);

    if(count(mid)>=m){
      answer = mid;
      left = mid+1;
    }
    else{
      right = mid-1;
    }
  }
  return answer;
}

console.log(solution(n,m,nums));

// console.log(solution(4,7,[20 ,15, 10 ,17]));