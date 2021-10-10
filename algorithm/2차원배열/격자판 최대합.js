
'use strict';

//1. N * N 격자판 주어지면
//각 행의 합, 각 열의 합 대 각선 합 중 가장 큰 값 출력


function solution(nums){
  
  let sum1 = 0 , sum2 = 0 , max = 0;
  let answer = 0;
  let len = nums.length;

  //
  for(let i = 0; i<len; i++ ){

    for(let  j =0; j<len ; j++){

      sum1 += nums[i][j];
      sum2 += nums[j][i];
    }
  }

  max = Math.max(sum1, sum2);
  sum1 = 0, sum2 = 0; 

  for(let i = 0; i<len ; i++){
    
    sum1 += nums[i][i];

    for(let j = len ; j< 0;  j++ ){

      sum2 += nums[i][j];
      
    }
  }

  max =Math.max(sum1,sum2);
  answer = max;

  return answer;
}

console.log(solution([[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], 
  [19, 13, 30, 13, 19]]));