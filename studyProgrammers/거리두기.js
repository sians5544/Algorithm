// 맨헤튼이라는 어려운 말이 있지만 파티션을 제외한 빈좌석과 지원자 기준으로 생각해야한다
// 지원자는 상하좌우에 자신과 같은 지원자가 나타나면 무조건 거리두기 실패
// 빈좌석 기준으로는 상하좌우 두명 이상의 지원자가 있다면 거리두기 실패인 것
// 그래서 나는 지원자, 빈좌석을 queue 에 넣고 각각의 상하좌우를 살펴서 확인
// 얘네는 문제 보다 예시에 표들을 보면서 안되는 곳의 사유로 추적하는게 더 빨랐을 거 같다

function solution(places) {
  let answer = [];

  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  for (let p of places) {
    let flag = true;
    let wating = [];
    let queue = [];
    let check = Array.from(Array(5), () => Array(5).fill(0));

    for (let i = 0; i < 5; i++) {
      wating.push(p[i].split(''));
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (wating[i][j] === 'P' || wating[i][j] === 'O') {
          queue.push([i, j]);
        }
      }
    }

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let [x, y] = queue.shift();

        let cnt = 0;

        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && wating[nx][ny] === 'P') {
            if (wating[x][y] === 'P') {
              flag = false;
              break;
            } else if (wating[x][y] === 'O') {
              cnt += 1;
              if (cnt >= 2) {
                flag = false;
                break;
              }
            }
          }
        }
      }
    }
    answer.push(+flag);
  }

  return answer;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
