'use strict';


function solution (cost, money){

  let sum =0 , answer = 0, left = 0;

  for(let right = 0; right < cost.length ; right++){
      sum+=cost[right];
    
      while(sum > money){
        sum-=cost[left++];
      }
      answer= Math.max(answer,right-left+1);
    }

  return answer;
}

console.log(solution([0,900,0,200,150,0,30,50],420));