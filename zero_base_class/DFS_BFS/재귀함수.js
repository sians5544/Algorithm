
// 재귀함수에서 구조는 if/else 의 구조로 가자 
//else 는 뻗어 나가는 곳
// if 는 종착역이다 

function solution(n){

  let answer;
  
  function DFS(n){
  
    if(n === 0) return ;
    else{
      DFS(parseInt(n/2));
      console.log(n%2);
    }
  }
  DFS(11);
  return answer;
}

console.log(solution(11));