function solution(nums) {
  let answer = 0;

  nums.sort((a, b) => b - a);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    answer = Math.max(answer, nums[left] + nums[right]);
    left++;
    right--;
  }

  return answer;
}

console.log(solution([3, 5, 2, 3]));
