function solution(nums) {
  let answer = [];

  let sum = 0;

  let len = nums.length;

  const LEN = 3;

  if (nums.length < LEN) return [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    let right = len - 1;
    let left = i + 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total < 0) left++;
      else if (total > 0) right--;
      else {
        answer.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return answer;
}
console.log(solution([0, 0, 0, 0]));
