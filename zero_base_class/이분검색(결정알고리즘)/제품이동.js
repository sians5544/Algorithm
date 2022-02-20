// [섬1, 섬 2 ,이 다리 이동하는 제품의 최대 무게]
// s,e : 엘리트 무역 회사의 공장이 위치한 섬의 번호들 
// s -> e 

// 이분검색은 1차원 배열 잘라서 하는 경우가 많다 
// 답은 1부터 
// mid -> 트럭에 실은 무게 
//다리의 무게 제한이 내가 정한 mid 값 이 클때만 갈수있는거다 bfs 을 돌릴 수 있다 
// 그럼 mid 는 늘려간다 


function solution(n,edges,s,e){

  let answer = 0; lt = 1, rt = 0;

  let graph = Array.from(Array(n+1),()=>Array());

  for(let [a,b,c] of edges){
    graph[a].push([b,c]);
    graph[b].push([a,c]);
    lt = Math.max(rt,c);
  }

  function DFS(w){


  }

 
}

