'use strict';

function solution(nums){

  let answer = 0;
  let i= 0;
  let n  = nums.length;

  while(i + 1 <n &&  nums[i] < nums[i+1]){
    i++;
  } 
  if(i===0 ||  i === n-1) answer = 0 ;
  while(i + 1 < n && nums[i] > nums[i+1]){
    i++;
  } 
  if(i !==n-1) answer = 0 ;

  return answer;

} 

console.log(solution([1,2,3,4,5]));
