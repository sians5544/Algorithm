var flipAndInvertImage = function (image) {
  let n = image.length;

  let answer = Array.from(Array(n), () => Array(n));

  for (let i = 0; i < n; i++) {
    answer[i] = image[i].reverse();

    for (let j = 0; j < n; j++) {
      answer[i][j] == 1 ? (answer[i][j] = 0) : (answer[i][j] = 1);
    }
  }

  return answer;
};
