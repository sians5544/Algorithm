function solution(nums,k){
  let answer = [];

  let hash = new Map();

  let left = 0;

  for(let right = 0; i<nums.length; right++){

    hash.set(nums[right],(hash.get(num[right]) || 0) +1);
    
    answer.push(hash.size());
  }

  return answer;
}