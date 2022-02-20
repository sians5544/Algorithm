'use strict';

const { fileURLToPath } = require('url');

//정렬하면 풀리는 문제들 많다 
// 정렬을 생각해보자 

// function solution(nums,m){

//   let answer = 0;
//   let left = 0 ; 
//   let right = nums.length-1
//   nums = nums.sort((a,b)=> a-b);


//   while(left < right){

//     if(nums[left] + nums[right] > m){
//       answer++;
//       right--;
//     }
//     else{
//       answer++;
//       left++;
//       right--;
//     }
//   }

//   return answer;
// }



function solution(nums,m){

  let answer = 0;

  nums = nums.sort((a,b) => a-b);

  let left = 0;
  let right = nums.length-1;

  while(left < right){
    if(nums[left] + nums[right] > m){
      answer++;
      right--;
    }
    else{
      left++;
      answer++;
      right--;
    }


  }
  return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140));