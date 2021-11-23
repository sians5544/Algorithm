/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let left = 0,
    answer = 0,
    sum = 0;

  costs.sort((a, b) => a - b);

  for (let right = 0; right < costs.length; right++) {
    if (costs[right] <= coins) sum += costs[right];
    if (sum > 0 && sum <= coins) {
      answer++;
    }
  }

  return answer;
};
