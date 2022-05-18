function solution(d, budget) {
  let answer = Number.MIN_SAFE_INTEGER;

  let left = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let right = 0; right < d.length; right++) {
    sum += d[right];

    while (sum > budget) {
      sum -= d[left++];
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
