function solution(nums, t) {
  let answer = Number.MIN_SAFE_INTEGER;
  n = nums.length;
  pow = Array.from({ length: t }, () => 0);
  st = Array.from({ length: n }, () => 0);
  pow[1] = 1;
  
  for (let i = 2; i <= t; i++) {
    pow[i] = pow[i - 1] * 2;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      st[i] += pow[nums[i][j]];
    }
  }
  function DFS(L, s, bit) {
    if (L === n) {
      let cnt = 0;
      for (let j = 0; j < n; j++) {
        if ((bit & st[j]) === st[j]) cnt++;
      }
      answer = Math.max(answer, cnt);
    } else {
      for (let i = s; i <= t; i++) {
        DFS(L + 1, i + 1, bit + pow[i]);
      }
    }
  }
  DFS(0, 1, 0);
  return answer;
}

console.log(solution([[2], [1, 3]], 4));
