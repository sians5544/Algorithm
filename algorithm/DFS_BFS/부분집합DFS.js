// DFS -> 스택, 재귀함수 

// 깊이 우선 탐색 ( 루트에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색 )

// 1. 모든 노드를 방문하고자 하는 경우에 이 방법 사용 
// 2. 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단함
// 3. 검색 속도 자체는 너비 우선 탐색에 비해서 느림

// BFS 
// 최대한 넓게 이동한 다음, 더 이상 갈 수 없을 때 아래로 이동 

// 루트 노드 에서 시작해서 인접한 노드를 먼저 탐색하는 방법 
// 주로 두 노드 사이에 최단 경로를 찾고 싶을 때 이 방법 선택

// function solution(n){

//   let answer = [] ; //배열로 출력 
//   let tmp = [];
//   function DFS(v){
//     if(v === n+1){
//       answer.push(tmp.slice());
//     }else{// 여기서 호출이 몇번 일어났냐에 따라서 가짓수가 결정
//       tmp.push(v);//v라는 원소를 사용한다 
//       DFS(v+1);
//       tmp.pop(); // 사용안한다 
//       DFS(v+1); // 사용안하니까 걍 간다 
//     }
//   }

//   DFS(1);






//  return answer;
//}


function solution(n){
  let answer = [];

  let tmp = [];

  function DFS(v){

    if(v === n+1){ //원소가 1부터 시작하기 떄문에  n+1 
      if (tmp.length !==0) // 이 처리 하지 않으면 값이 없을 떄도 slice 처리되어 마지막에 청답에 빈 배열 하나 추가됨 
      answer.push(tmp.slice()); 
    }
    else{ // 가지치기 즉 뻗어가는 애들(사용되는 애들)을 생성해주는 부분이라고 보자 
      tmp.push(v);// 사용하는 원소라면 tmp  push  
      DFS(v+1);// 그 다음 원소를 검사하기 위해 +1 재귀함수 실행
      tmp.pop();// 벡트래킹으로 부분집합으로 사용하지 않는 원소는 tmp에서 제거 
      DFS(v+1); // 그 원소가 사용되는지 검사 하기위한 재귀함수 실행 
    }
  }
  DFS(1); // 재귀함수의 시작 
  return answer;
}



console.log(solution(3));