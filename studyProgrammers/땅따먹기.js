function solution(land) {
  let answer = 0,
    index = -1;
  let numberBoard = Array.from(Array(land.length), () => []);
  let len = land[0].length;

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < len; j++) {
      numberBoard[i].push([land[i][j], j]);
    }
  }

  for (let i = 0; i < land.length; i++) {
    numberBoard[i].sort((a, b) => (b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]));
  }

  for (let j = 0; j < numberBoard.length; j++) {
    if (index === numberBoard[j][0][1]) {
      for (let k = 0; k < numberBoard[j].length; k++) {
        if (index !== numberBoard[j][k][1]) {
          answer += numberBoard[j][k][0];
          index = numberBoard[j][k][1];
          break;
        }
      }
    } else {
      answer += numberBoard[j][0][0];
      index = numberBoard[j][0][1];
    }

    // console.log(answer);
  }

  return answer;
}
