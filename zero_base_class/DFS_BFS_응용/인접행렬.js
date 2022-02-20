function solution(n,array){

  let answer = 0;

  let len = array.length;

  let check = Array(len).fill(0); // 정점을 방문했는지 판단하는 배열

  let board = Array(len); // 인접행렬 그래프 생성

  for(let i = 0; i< len; i++){
    board[i] = Array(len).fill(0);
  }

  for(let [a,b] of array){ // 선언된 간선의 정보로a->b 정점으로 가는 경로가 있다면 1로 체크 
    board[a][b] = 1; 
  }

  function DFS(v){

    if(v === n){ //입력 받은 정점의 수와 level이 같다면 카운트
      answer++;
    }
    else{
      for(let i = 1; i<=len; i++){
        if(board[v][i] === 1 && check[i]===0){ // 간선의 정보가 있고 check 가 되지않은 애들만 재귀함수 실행 
          check[i]=1;
          DFS(i);
          check[i]=0;
        }
      }
    }
  }

  check[1]=1 // 처음에 DFS가 1로 시작하기 때문에 방문 체크 1을 해줘야한다. 
  DFS(1);

  return answer;
}

console.log(solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));