// function solution(nums,m){
//   let answer = 0;

//   let left = 0,sum = 0;

//   for(let right = 0; right<nums.length; right++){
    
//     sum+=nums[right]; 
//     while(sum>m){
//       sum-=nums[left++];
//     }
//     if(sum === m ) answer++;
//   }
//   return answer;
// }


// 리스트에 담긴 데이터 순차적으로 접근하기 위해 사용
// 중복 조회가 아니라 배열을 한번 돌면서 값을 구하기 위해 사용한다고 생각하자 

// 연속 부분수열 1 
// 이 문제에서도 연속 부분 수열의 합이 특정 숫자가 되는 경우가 많은데 
// 원소 2개로 이루어진 부분합, 3개로 이루어진 부분합 이런식으로 조건 하나씩 찾기에는 너무나 많은 시간이 걸리기 때문에 two pointer 로 한번의 배열을 탐색하면서 
// 해당 조건들을 확인하는 문제에 적합하다고 생각한다 

function solution(nums,m){
  let answer = 0,sum=0 ,left=0;

  for(let right = 0; right<nums.length; right++){
    sum+=nums[right];
    while(sum > m){
      sum-=nums[left++];
    }
    if(sum === m) answer++;
  }

  return answer;
}



console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));


