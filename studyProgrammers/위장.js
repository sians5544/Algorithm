function solution(clothes) {
  //경우의 수  구하기
  // 종류가 {2, 1} 이라면
  // (2 + 1) * (1 + 1) -1
  // 1 종류에서 하나를 뽑거나 안 뽑거나할 수 있다  그래서 경의 수 2개
  // 2 종류에서는 1개를 뽑는 경우 2가지 + 안뽑는 경우 1가지  3개
  // 2*3 에다가 둘다 고르지 않는 경우는 없으므로 이것을 -1 해주기 때문에  5가된다!

  let answer = 1;
  let hash = new Map();

  for (let c of clothes) {
    hash.set(c[1], (hash.get(c[1]) || 0) + 1);
  }

  //경우의 수 구하기
  for (let [key, value] of hash) {
    answer *= value + 1; //(입는 경우 +  안 입는 경우)
  }

  return answer - 1;
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);

console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
);
