// label 이 붙은 사람의 명수
// 1.마을 판사는 아무도 믿지않음
// 2. 판사를 제외한 모든 사람들이 마을 판사를 믿는다
// 3.  1번과 2번을 만족시키는 사람이 정확히 한명 있다
// 마을 판사를 반환하라 없다면 -1 반환
// ex. [1,2] 1은 2을 신뢰한다 고로 2가 판사

function solution(n, trust) {
  let answer = -1;

  let labelPeople = Array(n + 1).fill(0);

  for (let [i, j] of trust) {
    labelPeople[i] -= 1; // 라벨이 있는 사람인가? 그 사람이 신뢰하는 것 카운트
    labelPeople[j] += 1; // 신뢰하는 사람 +1;
  }

  for (let i = 1; i < labelPeople.length; i++) {
    if (n - 1 === labelPeople[i]) return i; // 나를 제외한 나머지 사람들이 신뢰하는 것이기 때문에
  }

  return answer;
}

// 3
// [[1,3],[2,3]]
// 3
// [[1,3],[2,3],[3,1]]
// 3
// [[1,2],[2,3]]
// 4
// [[1,3],[1,4],[2,3],[2,4],[4,3]]
