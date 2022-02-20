function solution(n, results) {
  let answer = 1;

  let checkarr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  let failRank = Array(n + 1).fill(0);

  for (let result of results) {
    checkarr[result[0]][result[1]] = 1;
  }

  for (let i = 0; i < failRank.length; i++) {
    for (let j = 0; j < failRank.length; j++) {
      if (checkarr[j][i] === 1) failRank[i]++;
    }
  }

  let maxIndex = failRank.indexOf(Math.max(...failRank.map((item) => item)));

  for (let i = 0; i <= n; i++) {
    if (checkarr[maxIndex][i] === 1 && failRank[i] > 0) answer++;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
