// N 명의 학생의 키는 모두 다르다 

// a번 학생의 키가 b번 학생의 키보다 작다면 a에서 b로 화살표 


// 행 - 열 의 의미를 부여하자 
 
function solution(n,compare){
  let answer = 0;
  let dy = Array.from(Array(n+1), () => Array(n+1).fill(1e10)); 
  let cnt = Array.from(Array(n+1), () =>Array());

  for(let [a, b] of compare  ){ // 무방향 그래프 [마을 a, 마을 b , 두곳을 진가는데 걸리는 시간 ]
    dy[a][b] = 1;
  }

  for(let i = 0; i <=n; i++) dy[i][i] = 0;

  for(let k = 1 ; k<=n; k++){
    for(let i = 1; i<=n;  i++){
      for(let j = 1; j<=n; j++){
        if(dy[i][j] > dy[i][k] + dy[k][j]){
          dy[i][j] = dy[i][k]+dy[k][i];
        }
      }
    }
  }

  for(let i = 1; i <=n;  i++){
    for(let j = 1; j<=n; j++){
      if(dy[i][j] ===1e10){
        cnt[i]++;
        cnt[j]++;
      }
    }
  }
  for(let i = 1; i<=n; i++){
    if(cnt[i] == n-1) answer++;
  }
  return answer; 
}


console.log(solution(6, [[1, 5], [3, 4], [5, 4], [4, 2], [4, 6], [5, 2]]
  ));