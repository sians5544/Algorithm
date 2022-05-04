function solution(nums) {
  // 토막내서 다이나믹 하기
  let n = nums.length;

  let dy = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 1; i < n - 1; i++) {
    dy[i - 1][i + 1] = nums[i - 1] * nums[i] * nums[i + 1];
  }

  for (let j = 2; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      dy[i][i + j] = 2147000000;
      for (let k = i + 1; k < i + j; k++) {
        dy[i][i + j] = Math.min(
          dy[i][i + j],
          dy[i][k] + dy[k][i + j] + nums[i] * nums[k] * nums[i + j]
        );
      }
    }
  }

  return dy[0][n - 1];
}

console.log(solution([10, 1, 50, 50, 20, 5])); //3650
