// 왜 리스트로 만드느냐? 정점이 많아질수록 연결된 정점을 돌기 위해서 for문을 돌아야 하기 떄문ㅇ ㅔ 비효율적
/// 

function solution(n, array) {

  let answer = 0;

  let len = array.length;

  let check = Array(len + 1).fill(0); // 정점을 방문했는지 판단하는 배열

  let board = Array(len + 1); // 인접행렬 그래프 생성

  for (let i = 0; i < len; i++) {
    board[i] = Array(len + 1);
  }

  for (let [a, b] of array) {
    board[a].push(b); // a행에 b을 push  이렇게 하면 인접 리스트 생성 
  }

  function DFS(v) {

    if (v === n) { //입력 받은 정점의 수와 level이 같다면 카운트
      answer++;
    }
    else {
      for (let i = 0; i < board[v].length; i++) { // 
        if (check[board[v][i]] === 0) { //v 정점의 번호가 check가 되어있는지 아닌지만 확인한다 
          check[board[v][i]] = 1; // 넘겨받은 정점 번호의 사용여부 체크 
          DFS(board[v][i]); // DFS 로도 이제 리스트에 있는 값을 넘긴다 
          check[board[v][i]] = 0;
        }
      }
    }
  }

  check[1] = 1 // 처음에 DFS가 1로 시작하기 때문에 방문 체크 1을 해줘야한다. 
  DFS(1);

  return answer;
}

console.log(solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]));