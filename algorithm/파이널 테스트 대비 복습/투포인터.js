'use strict';

function solution(nums,k){
  let answer = 0,left = 0,cnt = 0;

  for(let right = 0; right <nums.length;  right++){
    if(nums[right] === 0) cnt ++;

    while(cnt > k){
      if(nums[left++] === 0) cnt --;
    }

    if(cnt === k){
      answer =Math.max(answer,(right-left) +1);
    }
    
  }
  return answer;
}

console.log(solution([1,1,0,0,1,0,1,1,0,0,1],3));