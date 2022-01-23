function solution(cardPoints, k) {
  let answer,sum = 0;
  let right = 1;
  for(let i = 1 ; i < cardPoints.length; i++){
    sum+=(nums[i]-nums[i-k]);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 1], 3));

// console.log(solution([9, 7, 7, 9, 7, 7, 9], 7));
