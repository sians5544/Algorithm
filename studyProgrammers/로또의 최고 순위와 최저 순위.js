function solution(lottos, win_nums) {
  let answer = [];
  let hash = new Map();
  let setNums = new Set(win_nums);
  let num = 1;
  let hitnum = 0;

  for (let i = 6; i >= 2; i--) {
    hash.set(i, num++);
  }

  //0으로 가려지지 않았고, 당첨 번호로 있는 애들이 최저 순위
  for (let lotto of lottos) {
    if (lotto !== 0 && setNums.has(lotto)) {
      hitnum += 1;
    }
  }

  // 0으로 가려진 애들의 개수가 최고 순위가 될 것이다
  let zeroCount = lottos.filter((lotto) => lotto === 0).length;

  zeroCount + hitnum <= 1 ? answer.push(6) : answer.push(hash.get(zeroCount + hitnum));

  hash.has(hitnum) ? answer.push(hash.get(hitnum)) : answer.push(6);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19], [3, 5]));
