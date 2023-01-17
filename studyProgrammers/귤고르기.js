function solution(k, tangerine) {
  var answer = 0;
  let hash = new Map();
  let sum = 0;
  tangerine.forEach((t) => {
    hash.set(t, (hash.get(t) || 0) + 1);
  });

  let arr = [...hash];

  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][1];
    if (sum >= k) return i + 1;
  }
}
