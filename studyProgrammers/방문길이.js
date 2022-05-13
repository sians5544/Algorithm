function solution(dirs) {
  let answer = 0;
  let charicter = [0, 0];
  let visitedLoad = {};
  let dist = {
    U: [0, -1],
    D: [0, 1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let dir of dirs) {
    let [x, y] = dist[dir];

    let dx = x + charicter[0];
    let dy = y + charicter[1];

    if (dx < -5 || dy < -5 || dx > 5 || dy > 5) continue;
    // 갔던 길 왕복으로 체크해줘야함...
    if (
      !visitedLoad[`${charicter[0]}${charicter[1]}${dx}${dy}`] &&
      !visitedLoad[`${dx}${dy}${charicter[0]}${charicter[1]}`]
    ) {
      answer += 1;
      visitedLoad[`${charicter[0]}${charicter[1]}${dx}${dy}`] = 1;
      visitedLoad[`${dx}${dy}${charicter[0]}${charicter[1]}`] = 1;
    }

    charicter = [dx, dy];
  }

  return answer;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LRLRL'));
// console.log(solution('LULLLLLLU'));
