
'use strict';

function solution(nums,n){

  let answer = 0; 
  let array = [];
  let left = 0 , sum = 0  , count = 0;
  let hash = new Map();

  for(let right = 0; right< nums.length; right++){

  sum+=nums[right];
    
  while(sum % 2 == 1 ){
       sum-= nums[left++];
      }
       if( sum === n) answer++;
   }
   return answer;
}

  



console.log(solution([1, 2, 1, 1, 2], 2));

console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));

console.log(solution([2, 4, 6], 1));