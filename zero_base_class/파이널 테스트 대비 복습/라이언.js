const { log } = require('console');

function solution(n, k , nums){

  let answer = Number.MAX_SAFE_INTEGER;

  let left  = 0, cnt  = 0;

  for(let right = 0; right< n ;  right++){
    if(nums[right] === 1) cnt ++;

    while( cnt >= k){
      if(nums[left] === 1 ){
        cnt--;
      }      
      answer = Math.min(answer, (right-left)+1);

      left++;
    }
  }

  return answer;
}

console.log(solution(10, 3, [1, 2, 2, 2, 1, 2, 1 ,2 ,2 ,1]));