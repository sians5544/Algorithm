function solution(prices, d, k) {
  let answer = 0;
  let N = prices.length;

  const getAverage = (prices, a, b) => {
    let sum = 0;

    for (let i = a; i <= b; i++) {
      sum += prices[i];
    }

    sum = parseInt(sum / b - a + 1);

    return sum;
  };

  prices.sort((a, b) => a - b);

  if (prices[N - 1] - prices[0] <= d) {
    return getAverage(prices, 0, N - 1);
  }

  if (prices[N - 2] - prices[1] <= d) {
    return getAverage(prices, 1, N - 2);
  }

  for (let i = 0; i + k < N; i++) {
    if (prices[i + k - 1] - prices[i] <= d) {
      return getAverage(prices, i, i + k - 1);
    }
  }

  return prices[parseInt((N - 1) / 2)];
}

console.log(solution([4, 5, 6, 7, 8], 4, 3));
console.log(solution([4, 5, 6, 7, 8], 2, 1));
console.log(solution([4, 5, 6, 7, 8], 1, 2));
console.log(solution([8, 4, 5, 7, 6], 1, 3));
console.log(solution([1, 8, 1, 8, 1, 8], 6, 4));
