const { count } = require('console');

function solution(nums) {

  let maxn = Number.MIN_SAFE_INTEGER;

  let n = nums.reduce((a, b) => a > b ? a : b);

  let counts = Array(n).fill(0);

  let len = parseInt(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (counts[nums[i] - 1] >= len) return nums[i];
    else counts[nums[i] - 1] += 1;
  }
}

console.log(solution([3, 2, 3]));
console.log(solution([4, 5, 4]));
console.log(solution([2, 2, 1, 1, 1, 2, 2]));
