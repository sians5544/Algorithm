///두개의 연속적인 인덱스 중  차이 중 가장 큰 값 리턴

function solution(nums) {
  let answer = 0;

  if (nums.length < 2) return 0;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    answer = Math.max(nums[i] - nums[i - 1], answer);
  }

  return answer;
}
