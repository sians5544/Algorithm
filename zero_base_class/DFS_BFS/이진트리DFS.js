// 전위 순회 부-> 왼 -> 오
// 중위 순회 왼-> 부 -> 오
// 후위 순회 왼 ->오 -> 부 



/// 아래는 전위 출력

function solution(n){
  let answer="";
  function DFS(v){

    if(v>7) return;
    else{
      answer+=(v+' ');
      DFS(v*2);
      DFS(v*2+1);
    }
  }
  DFS(n);
  return answer;
  }

  console.log(solution(1));


// 중위 순회 : 왼- > 부 ->오 

function solution(n){
  let answer="";
  function DFS(v){
    if(v > 7) return;
    else{
      DFS(v*2);
      answer+=(v+' ');
      DFS(v*2+1);
      }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));


 //후위 :왼 -> 오 -> 부
function solution(n){
  let answer="";

  function DFS(v){
    if(v > 7) return;
    else{
      DFS(v*2);
      DFS(v*2+1);
      answer+=(v+' ');
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(1));
