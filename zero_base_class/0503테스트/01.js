function solution(n) {
  let answer = 0;

  let left = n;
  let right = n;

  const dfs = (left, right) => {
    if (left === 0 && right === 0) {
      answer++;
    } else {
      if (left < 0 || right < 0 || left < right) return; // 괄호 짝 맞게 컷팅 , 한쪽 괄호만 열리는 거 방지~
      dfs(left - 1, right);
      dfs(left, right - 1);
    }
  };

  dfs(left, right);

  return answer;
}

console.log(solution(3)); //5
console.log(solution(4)); //14
console.log(solution(5)); //42
console.log(solution(6)); //132
console.log(solution(7)); //429
