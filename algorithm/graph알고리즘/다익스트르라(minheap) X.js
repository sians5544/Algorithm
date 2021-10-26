//다익스트라 문제 굉장히 많이 나온다 
// 그래프의 정점이 있는데 한 정점에서 다른 모든 정점으로 가는 최단 거리를 구한다 
// 간선의 가중치 값이 음수는 없고 무조건 양수이다 

// 노드 개수가 작으면 minheap 을 쓰지마라
// 100~200 개 사이면 이거 하기 


function solution(n, edges, end) {
  let answer = 0;

  let graph = Array.from(Array(n+1), () => Array());
  let dist = Array.from({length:n+1}, () => 1000); // 각 노드의 최소값을 가지고 있는 배열 

  let ch = Array(n+1).fill(0);
  
  for(let [a, b, c] of edges){ // r가중치 그래프
      graph[a].push([b, c]);
  }
  dist[1] = 0;

  for(let i = 0; i<=n; i++){
    let min = 0;
    for(let j = 1; j<=n; j++){
      if(ch[j] === 0 && dist[j]  < dist[min] ) min = j; // 출발점  0 이라서 1번 노드가 걸림  , min - 디스턴스 인덱스 번호 : 그래프  노드번호 
    }

    ch[min] = 1;

    for(let [next ,cost] of graph[min]){ // next는 min에서 갈수 있는 정점들 최소 값 
      if(dist[min]+cost < dist[next]){ // 1->min -> next  거쳐간 값 
        dist[next] = dist[min] +cost;
      }
    }
  }
  answer = dist[end];
  return answer;
}
console.log(solution(6, [[1, 2, 12], [1, 3, 4], [2, 1, 2], [2, 3, 5], [2, 5, 5], [3, 4 ,5], [4, 2, 2], [4, 5, 5], [6, 4, 5]], 5));