function solution(nums,k){
  let answer = 0
  
  function counting(k){
    let sum = 0 ,left = 0;
    let cnt = 0;

    for(let right = 0; right < nums.length; right++){

      if(nums[right] % 2 === 1) cnt++;

      while(cnt> k){
        if(nums[left] % 2 === 1) cnt--;
        left++;
      }   
      sum+=(right-left) +1;
    }
    return sum;
  }

  answer = counting(k)-counting(k-1);
  return answer;
}



console.log(solution([1, 2, 1, 1, 2], 2));