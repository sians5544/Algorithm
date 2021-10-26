function solution(arr) {
  let answer = 0;

  let n = arr.length;
  let dy1 = Array(n).fill(1);
  let dy2 = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dy1[i] = Math.max(dy1[i], dy1[j] + 1);
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        dy2[i] = Math.max(dy2[i], dy2[j] + 1);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, (dy1[i] + dy2[i] -1));
  }
  return answer;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1]));