function solution(nums) {
  const LEN = 3;
  let answer = [];
  let result = new Map();

  let sum = 0;

  let len = nums.length;

  if (nums.length < LEN) return [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    let right = len - 1;
    let left = i + 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total < 0) left++;
      else if (total > 0) right--;
      else {
        answer.push([nums[i], nums[left], nums[right]]);
        // while (left < right && nums[left] === nums[left + 1]) left += 1;
        // while (left < right && nums[right] === nums[right - 1]) right -= 1;
        left += 1;
        right -= 1;
      }
    }
    while (nums[i + 1] === nums[i]) i++;
  }

  return answer;
}
console.log(solution([0, 0, 0, 0]));
