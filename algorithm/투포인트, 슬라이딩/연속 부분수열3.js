function solution(nums,m){
  let answer = 0;

  let sum =0 , left = 0;


  for(let right = 0; right < nums.length; right++){

    sum+=nums[right];
    while(sum>m){
      sum-=nums[left++];
    }
    if(sum<=m){
      answer +=(right-left)+1;
    }
  }
  return answer;
}


console.log(solution([1, 3, 1, 2, 3], 5));
console.log(solution([1, 1, 1, 1, 1, 1],3));