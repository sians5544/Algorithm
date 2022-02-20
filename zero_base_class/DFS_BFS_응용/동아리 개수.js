
'use strict';

function solution(n, edges){  
  let answer=0;
  let graph=Array.from(Array(n+1), ()=>Array());
  let ch=Array.from(Array(n+1), ()=>0);

  for(let [a, b] of edges){
      graph[a].push(b);
      graph[b].push(a);
  }


  console.log(graph);
  
  function DFS(v){
      for(let nv of graph[v]){
          if(ch[nv]===0){
              ch[nv]=1;
              DFS(nv);
          }
      }
  }

  for(let i=1; i<=n; i++){
      if(ch[i]===0){
          answer++;
          ch[i]=1;
          DFS(i);
          console.log(ch);
      }
  }
  return answer;
}



// function solution(n,edges){
//   let answer = 0;

//   let check = Array(n).fill(0);

//   let student = Array(n).fill();

//   for(let i = 0; i < student.length; i++){
//     student[i] = Array(n);
//   } // 인접 리스트 - 학생들이 서로 같은 동아리인지 확인하기 위함 




// }






function solution(n,edges){
    let answer = 0;

    let check = Array(n+1).fill(0);

    let graph=Array.from(Array(n+1), ()=>Array());


    for(let [a,b] of edges ){
        graph[a].push(b);
        graph[b].push(a)
    }

    console.log(graph);

    function DFS(v){
        for(let nv of graph[v]){
            if(check[nv] === 0){
                check[nv] = 1;
                DFS(nv);
            }
        }
    }


    for( let j= 1; j <=n; j++){
        if(check[j] === 0){
            check[j] =1 ;
            DFS(j);
            answer++;
        }
    }


    return answer;
}
console.log(solution(7,[[1,2],[2,3],[1,4],[1,5]]));