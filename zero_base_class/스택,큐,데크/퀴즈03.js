function solution(nums, m){
  let answer=0 ;
  function counting(k){

    let count=0, lt=0;
    let sum = 0 ;  

    for(let rt=0; rt<nums.length; rt++){
      
      if(nums[rt] % 2 === 1){
        count ++;
        }

      while(count > k){
          if(nums[lt] % 2 === 1){
            count--;
            lt++;
          }
        }
        sum+=(rt-lt+1);
    }               
    return sum;
  }

  answer = counting(m)-counting(m-1);
}
console.log(solution([1, 2, 1, 1, 2], 2));