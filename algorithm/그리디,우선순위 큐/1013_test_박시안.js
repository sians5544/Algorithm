'use strict';

function solution(nums,k){
  let answer = "";
  let stack = [] ; 

  nums = nums+"";
  nums = nums.split("");

  for(let i = 0 ; i< k; i++){

  stack.push(nums[i]);

  }

  if(nums.length === k) return 0;

  for( let x of nums){
    if(x === stack.shift()){
      nums.shift();
    }
    
    if(stack.length === 0) break;
  }

  for(let y of nums){
    answer+=y;
  }
  
  return Number(answer);
}

//console.log(solution(7612345, 5)); //12
//console.log(solution(999102345, 5)); //234
//console.log(solution(10000023, 2)); //2
//console.log(solution(30000043, 3)); //0
//console.log(solution(12345670, 7)); //0
//console.log(solution(123456, 3)); //123
//console.log(solution(12003, 3)); //0
//console.log(solution(9, 1)); //0
//console.log(solution(98765432, 7)); //2
//console.log(solution(57622312, 4)); //2212