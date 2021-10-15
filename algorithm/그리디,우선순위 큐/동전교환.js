// 탐욕법 , 탐욕 알고리즘

// 문제를 해결하는 과정에서 그 순간순간마다 최적이라고 생각하는 결정을 하는 방식 
// 반드시 최적의 해를 구해준다는 보장은 없다 

// 배수 관계를 가지고 있어야지 그리디가 적용이되는 것이다 그렇지안흥면 그리디 못함 

function solution(nums,m){
  let answer = 0;

  for(let i = nums.length-1 ; i>=0 ; i--){
    answer += parseInt(m/nums[i]);
    m = m %nums[i];
  }

  return answer;
}

console.log(solution([1, 5, 10], 15));