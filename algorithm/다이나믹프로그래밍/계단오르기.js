// 다이나믹 프로그래밍 
// 한반ㅇ에 구하기 힘든 문제를 잘게 쪼개는 직관적으로 알수있는 단위로까지 
// dy , ,dp 둘 중에 하나 사용한다 
// dy [i] =  i번째 계단에 도착하는 방법의 수 

// 동적 계획법 
// 문제를 한번에 풀기에는 어려워서 작은 단위로 쪼개서 하나 풀고 저장
// 그리고 범위를 넓혀서 점화식의 관계를 넓혀가는 것이다 
// 이러한 관계식을 잡아가는게 핵심이다 

//dy 라는 테이블을 만들어서 

function solution(n){
  let answer = 0;

  let dy = Array(n+1).fill(0);

  dy[1] = 1;
  dy[2] = 2;

  for( let i = 3; i<=n; i++){
    dy[i] = dy[i-2] + dy[i-1];
  }

  console.log(dy);
  answer = dy[n];
  return answer;
} 

console.log(solution(7));