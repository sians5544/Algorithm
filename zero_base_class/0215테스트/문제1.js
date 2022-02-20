function solution(board) {
  let answer = 0; // 시간 체크
  let hcnt = 0;
  let ccnt = 0;

  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  // 10 * 10  배열을 만든다

  let dist = Array.from(Array(10), () => Array(10).fill(0));
  let harea = [];
  let carea = [];

  let boardarr = board.map((b) => b.split(''));

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (boardarr[i][j] === 'H') {
        harea.push(i);
        harea.push(j);
      } else if (board[i][j] === ',') {
        boardarr[i][j] = 0;
      } else if (board[i][j] === '*') {
        boardarr[i][j] = 1;
      } else if (boardarr[i][j] === 'C') {
        carea.push(i);
        carea.push(j);
      }
    }
  }

  // heara 현수의 위치 , 현수의 위치가 곧 시작이다

  while (true) {
    let nx = harea[0] + dx[hcnt];
    let ny = harea[1] + dy[hcnt];

    let cx = carea[0] + dx[ccnt];
    let cy = carea[1] + dy[ccnt];

    // 회전안하고 그냥 쭉쭉 갈 때  더한 값을 업데이트 해준다

    if (nx >= 0 && nx < 10 && ny >= 0 && ny < 10) {
      if (nx === 0 || nx === 9 || ny === 0 || ny === 9 || boardarr[nx][ny] === 1) {
        hcnt++;
        if (hcnt === 4) hcnt = 0;
      }

      harea[0] = nx;
      harea[1] = ny;
    }

    if (cx >= 0 && cx < 10 && cy >= 0 && cy < 10) {
      if (cx === 0 || cx === 9 || cy === 0 || cy === 9 || boardarr[cx][cy] === 1) {
        ccnt++;
        if (ccnt === 4) ccnt = 0;
      }
      carea[0] = cx;
      carea[1] = cy;
    }

    if (nx === cx && ny === ny) return answer;

    if (10000 < answer) break;

    answer++;
  }
  return answer;
}

let arr = [
  '*,,,*,,,,,',
  ',,,,,,*,,,',
  ',,**,,,*,,',
  ',,,,,,,,,,',
  ',,,*,*,,,,',
  '*,,,,,*,*,',
  ',,,*,,,,,,',
  ',,*,,,,,H*',
  ',,,*,*,,C*',
  ',*,*,,,,,*',
];
console.log(solution(arr));
