// function solution(nums,m){
//   let answer = 0;

//   let sum =0 , left = 0;


//   for(let right = 0; right < nums.length; right++){

//     sum+=nums[right];
//     while(sum>m){
//       sum-=nums[left++];
//     }
//     if(sum<=m){
//       answer +=(right-left)+1;
//     }
//   }
//   return answer;
// }

// 이문제도  연속 부분수열 1번과 마찬가지다 
// 합이 5이하가 되는 부분 수열을 구하려면 
// 투포인터를 사용하지 않으면 1 자리 2자리 를 구하기 위해 for문을 최소 3번은 실행해야하는데 
// 투포인터를 사용할 떄는 한번의 탐색으로 경우의 수를 구하 수 있다 
// nums의 길이같은 경우는 100,000 10만개로 이 많은 길이들을 여러번 for문을 돌면 시간이 너무 오래 걸리기 때문이다 

function solution(nums,m){
  let answer = 0 ,left = 0, sum = 0;


  for(let right = 0; right < nums.length; right++){

    //일단 특정 숫자의 합이니까 더하기가 먼저 
    sum+=nums[right];  

    while(sum > m){
      sum-=nums[left++];
    }

    answer += (right-left)+1; 
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
console.log(solution([1, 1, 1, 1, 1, 1],3));
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5));