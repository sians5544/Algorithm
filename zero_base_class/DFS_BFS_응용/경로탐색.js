//1. 간선의 정보로 인접형렬 만들기 
//2 . 어떤 문제에서 경우를 따지면 DFS를 쓰는 것이다 
// 3. DFS 0으로 선언으로 시작 

function solution(n,edges){

  let check = [];
  let answer = 0;

  let graph = Array.from (Array(n+1), ()=> Array(n+1).fill(0));
  for (let i = 0; i < nums.length; i++) {
		check[i] = 0;
	}

  for(let [a,b] of edges){
    graph[a][b]= 1;
  }// 인접 행렬 생성
  
  
  function DFS(v){
    if(v === n){
      answer++;
    }
    else{
      for(let i =1 ; i<=n; i++){
        ch[i]= 1; // 체크 
      }
    }
  }
}