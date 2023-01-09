// 3개의 원소의 합이 0인 부분집합을 찾는 문제이므로 DFS 사용
function solution(number) {
  let answer = 0;
  let tmp = [];

  function DFS(v, s) {
    if (v === 3) {
      if (tmp.reduce((acc, cur) => acc + cur) === 0) answer += 1;
      return;
    } else {
      for (let i = s; i < number.length; i++) {
        tmp.push(number[i]);
        DFS(v + 1, i + 1);
        tmp.pop();
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5])); //2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); //5
console.log(solution([-1, 1, -1, 1])); //0
