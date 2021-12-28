function solution(n, nums) {
  let answer = 0;

  nums.sort((a, b) => b[0] - a[0]);

  let check = nums[0][1];

  for(let i = 1; i< n ; i++){
    
    if(check)
  }

  console.log(nums);

  return answer;
}

console.log(
  solution(5, [
    [3, 2],
    [1, 4],
    [4, 1],
    [2, 3],
    [5, 5],
  ])
);

console.log(
  solution(7, [
    [3, 6],
    [7, 3],
    [4, 2],
    [1, 4],
    [5, 7],
    [2, 5],
    [6, 1],
  ])
);
