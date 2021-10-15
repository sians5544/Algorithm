function solution(n,edges){

  let answer = 0;
  let len = edges.length;
  let ch=Array(len-1).fill(0); // 체크 배열 
  let graph = Array.from(Array(len+1), ()=> Array(len+1).fill(0));

  for(let [a,b] of edges){
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(v){
    for( let nv of graph[v]){
      if(ch[nv] === 0){
        ch[nv] = 1; // 미리 갈려는 곳을 체크하고 DFS 로 넘어간다 
        DFS(nv);
      }
    }
  }
  for(let i = 1; i<=n;i++){
    if(ch[0]===0){
      answer++;
      ch[i]=1; // 위와 마찬가지로 가려는 곳을 체크하고 넘어간다 
      DFS(i);
    }
  }

return answer;
}

console.log(solution(7,[[1,2],[2,3],[1,4],[1,5]]));