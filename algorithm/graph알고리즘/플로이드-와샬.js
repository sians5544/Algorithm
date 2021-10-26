// 플로이드 와샬 알고리즘의 핵심 아이디어는 
// 모든 정점에서 모든 정점 
// 거쳐가는 정점을 기준으로 최단 거리를 구하는 것이다 

// dis[i][j] i-> j 노드로 가는데 최소비용
// 1 ->4  처럼 바로 가는 방법이 없다면 M 무한대의 값을 입력

// min 1) dis[i][j]  (직행) 2) dis[i][k] + dis[k][j] (중간에 다른 곳 거쳐가기 )


// 그냥 플로이드 워셜 쓰는구나 하고  외워버리자 

// 문제 봤는데 노드 개수가 300개 밑이면  플로이드 워셜  그 이상은 다익스트라 


function solution(n, edges){  
  let answer=0;
  let dy=Array.from(Array(n+1), ()=>Array(n+1).fill(1000));
  for(let i=1; i<=n; i++) dy[i][i]=0;
  for(let [a, b, c] of edges){
      dy[a][b]=c;
  }
  for(let k=1; k<=n; k++){ // k 가 1로 결정 나면서 dy[i][j] 값들을 다 바꾸고 있는 것이다
      for(let i=1; i<=n; i++){
          for(let j=1; j<=n; j++){
              if(dy[i][j]>dy[i][k]+dy[k][j]){  //k거쳐서 가는 비용이 기존값보다 작으면 바꿔라 
                  dy[i][j]=dy[i][k]+dy[k][j]; // 바꿔줌 
              }
          }
      }
  }
  for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
          if(dy[i][j]===1000) dy[i][j]='M';
      }
  }
  console.log(dy);
  return answer;
}

console.log(solution(5, [[1, 2, 6], [1, 3, 3], [3, 2, 2], [2, 4, 1], [2, 5, 13], [3, 4, 5], [4, 2, 3], [4, 5, 7]]));

