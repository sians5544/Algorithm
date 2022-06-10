function solution(mat, r, c) {

  let n = mat[0].length;
  let answer = Array.from(Array(r), () => Array(c).fill(0));

  if (r * c !== mat.length * mat[0].length) return mat;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let k = c * i + j;
      let m = Math.floor(k / n);
      answer[i][j] = mat[m][k % n];
    }
  }

  return answer;
}

console.log(solution([[1, 2], [3, 4]], 1, 4));
console.log(solution([[1, 2], [3, 4]], 2, 4));5