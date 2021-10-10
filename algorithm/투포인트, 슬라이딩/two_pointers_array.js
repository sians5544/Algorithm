
// 연속 부분 수열 
// 투포인터를 사용해서 푼다!!
function solution3(nums,m){

  let answer = 0; 

  let left = 0 , sum = 0 ;
  
  
  for(let right = 0; right< nums.length; right++){

    sum+=nums[right];

    while(sum > m){
      sum-= nums[left++];
    }
    if( sum === m) answer++;
  }

  return answer;

}

console.log(solution3([1, 2, 1, 3, 1, 1, 1, 2],6));
console.log(solution3([1,1,1,1,1,1],3));

//  연속 부분수열 2


// 연속 부분수열 3

function solution(nums, m){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<nums.length; rt++){
      sum+=nums[rt];
      while(sum>m){
          sum-=nums[lt++];
      }
      answer+=(rt+lt+1);
  }               
  return answer;
}
console.log(solution([1, 1, 1, 1, 1, 1], 3));