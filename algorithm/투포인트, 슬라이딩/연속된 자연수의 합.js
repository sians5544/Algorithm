function solution(n){

  let answer=0 ,left=0,sum=0;

  let len = parseInt(n/2);

  let nums  = Array(len);

  for(let i = 0; i<=len; i++){
    nums[i] = i+1;
  }

  for(let right = 0; right <nums.length; right++){
    sum+=nums[right];
    while(sum>n){
      sum-=nums[left++];
    }
    if(sum === n){
      answer++;
    } 
  }

  return answer;
}

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));