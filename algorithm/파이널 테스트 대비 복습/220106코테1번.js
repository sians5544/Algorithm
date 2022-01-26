function solution(nums, k) {
  let answer = 'NO';

  let hash = new Map();
  let tmp = [];

  for (let n of nums) {
    hash.set(n, (hash.get(n) || 0) + 1);
  }

  nums.sort((a, b) => a - b);

  let len = nums / k;

  for (let n of nums) {
    let cnt = 0;
    let cur = n;

    if (hash.size < k) break;

    while (hash.get(cur) > 0 && cnt < k) {
      hash.set(cur, hash.get(cur) - 1);
      if (hash.get(cur) === 0) hash.delete(cur);
      cnt++;
      cur++;
    }
  }

  if (hash.size === 0) answer = true;

  return answer;
}

console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 9, 5, 10, 11], 3));
console.log(solution([1, 1, 2, 2, 3, 3], 3));
