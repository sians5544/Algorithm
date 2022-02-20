function solution(prices) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
}

console.log(solution([7, 1, 5, 3, 6, 4])); // 5
console.log(solution([7, 6, 4, 3, 1])); // 0
console.log(solution([2, 4, 1])); //2
