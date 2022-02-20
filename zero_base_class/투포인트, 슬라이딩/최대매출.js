function solution(nums,k){
  let answer,sum = 0;

  for(let i = 0; i<k ; i++){
    sum+= nums[i];
  }
  answer = sum; 

  for(let i = k; i< nums.length; i++){
    sum+= (nums[i]- nums[i-k]); // k 가 3이라면 0~3까지 더한 값에서 index 4는 더하고 index 0번은 빼면 다음 매출기록된다 
    answer = Math.max(answer,sum);
  }

  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));