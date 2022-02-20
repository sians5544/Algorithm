//  각 회원들과의 가까운  정도에 따라 점수를 받게됨 

// 다른 모든 회원과 친구면 1점,  
// 다른 모든 회원이 친구거나  친구의 친구  2점 
// 다른 모든 회원 친구거나, 친구의 친구거나 , 친구의 친구의 친구 , 3점
// 4점,  5점은 같은 방법으로 정해짐 


//회장은 회원들 중에서  점수가 가장 작은 사람  
// 회장의 점수와 회장이 될 수 있는 모든  사람을 찾는 프로그램 작성 
// 회원들 간의 간격이 최소인것을 뽑아라 

function solution(n,edges){
  let answer = [];

//다이나믹 테이블 

let dy = Array.from(Array(n+1), () => Array(n+1).fill(100));

  // 양방향으로 만들기 

  for(let [a, b] of edges ){ // 무방향 그래프 [마을 a, 마을 b , 두곳을 진가는데 걸리는 시간 ]
    dy[a][b] = 1;
    dy[b][c] = 1;
  }

  for(let k = 1; k<=n ; k++){
    for(let i = 1;  i<=n;  i++){
      for(let j = 1; j<=n; j++){
        d[i][j] = Math.min(dy[i][j],dy[i][k] + dy[k][i]]);
      }
      
      score = Math.min(score,dist[i]);
    }
  }

  answer.push(score);
  let cnt = 0;
  for(let i = 0; i<=n; i++){
    if(dist[i] === score) cnt++;
  }
  answer = cnt;
  return answer;
}

