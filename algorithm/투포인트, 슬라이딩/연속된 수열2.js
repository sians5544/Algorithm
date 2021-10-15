function solution (nums, m){

  // 얘네는 합산해도 음수 값이 있어서 sum 이 누적이 되지않음  그래서 hash로 sum 을 기록

  let answer = 0 , sum = 0; 
  let hash = new Map();

  for(let i = 0; i < nums.length ; i++){
    sum += nums[i];
    if(sum === m ) answer++;
    if(hash.has(sum-m)) answer+= hash.get(sum-m);
    hash.set(sum, hash.get(sum) + 1 || 1);

  } 

  return answer ; 
}

console.log(solution([1, 2, 3, -3, 1, 2], 3));